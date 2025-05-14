"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/navbar";
import { PlayerCard } from "@/components/playercard"; // Your PlayerCard component
import { MatchList } from "@/components/matchlist"; // Your MatchList component
import { Button } from "@/components/ui/button";
import { transformToMatchLine } from "@/utils/transformers";

export const dynamic = "force-dynamic";



export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [winCount, setWins] = useState<any>(null);
  const [lossCount, setLosses] = useState<any>(null);
  const [matches, setMatches] = useState<any[]>([]);
  const [transformedMatches, setTransformedMatches] = useState<any[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();
  const [showAllMatches, setShowAllMatches] = useState(false);

  function setUserData(data: any) {
    setUser(data.user);
    setWins(data.winCount);
    setLosses(data.lossCount);
    setMatches(data.matches);
    setTransformedMatches(data.matches.map(transformToMatchLine));
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
      return;
    }

    fetch("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          router.push("/");
          throw new Error("Failed to fetch user");
        }
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
          router.push("/");
        } else {
          setUserData(data);
        }
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setError("Failed to load user data");
        router.push("/");
      });
  }, [router]);

  async function handleMatch(opponentName: string, didWin: boolean) {
    if (!opponentName || !user) return;

    try {
      const res = await fetch("/api/user/by-name?name=" + encodeURIComponent(opponentName));
      if (!res.ok) throw new Error("Opponent not found");

      const response = await res.json();
      const opponent = response.user;
      const winnerId = didWin ? user.id : opponent.id;
      const matchRes = await fetch("/api/match/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          player2Id: opponent.id,
          winnerId,
        }),
      });

      if (!matchRes.ok) throw new Error("Failed to create match");

      const updatedRes = await fetch("/api/user", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (!updatedRes.ok) throw new Error("Failed to refresh user data");

      const updatedData = await updatedRes.json();
      setUserData(updatedData);
    } catch (err) {
      console.error("Error submitting match:", err);
      alert("Failed to record match");
    }
  }

  async function undoLastMatch(latestMatch: any) {
    if (!latestMatch?.undoable) return null;
  
    const res = await fetch("/api/match/undo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ matchId: latestMatch.id }),
    });
  
    if (!res.ok) throw new Error("Failed to undo match.");
  
    const updated = await fetch("/api/user", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  
    if (!updated.ok) throw new Error("Failed to refresh user data");
  
    return updated.json();
  }

  async function logout() {
    const confirmed = confirm("Are you sure you want to log out?");
    if (!confirmed) return;
  
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
  
    router.push("/");
  }

  console.log("User:", user);

  return (
    <>
      <NavBar />
      <main>
        <div>
          {error && <p>{error}</p>}
          {user && (
            <>
              <div className="space-y-4">
                <PlayerCard
                  name={user.name}
                  rating={user.rating}
                  wins={winCount}
                  losses={lossCount}
                />
                <div className="flex flex-wrap gap-2">
                  <Button className="p-2 shadow-lg" onClick={() => handleMatch(prompt("Who did you beat?") || "", true)}>
                    Add Win
                  </Button>
                  <Button className="p-2 shadow-lg" onClick={() => handleMatch(prompt("Who did you lose to?") || "", false)}>
                    Add Loss
                  </Button>
                  <Button className="p-2 shadow-lg"
                    onClick={async () => {
                      try {
                        const data = await undoLastMatch(matches[0]);
                        if (data) setUserData(data);
                      } catch (err) {
                        alert("Failed to undo match.");
                        console.error(err);
                      }
                    }}
                    disabled={matches.length === 0 || !matches[0].undoable}
                  >
                    Undo Last Match
                  </Button>
                </div>
                <div className="p-2 shadow-lg">
                  <MatchList matches={transformedMatches} />
                </div>
                <Button onClick={logout}>Log out</Button>
              </div>
            </>
          )}
        </div>
        
      </main>
    </>
  );
}