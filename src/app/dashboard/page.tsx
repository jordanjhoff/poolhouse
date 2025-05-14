"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export const dynamic = "force-dynamic";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [matches, setMatches] = useState<any[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();
  const [showAllMatches, setShowAllMatches] = useState(false);

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
          throw new Error("Failed to fetch user");
        }
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
          router.push("/");
        } else {
          setUser(data.user);
          setMatches(data.matches);
        }
      })
      .catch((err) => {
        localStorage.removeItem("token");
        console.error("Error fetching user:", err);
        setError("Failed to load user data");
      });
  }, [router]);

  async function handleMatch(opponentName: string, didWin: boolean) {
    if (!opponentName || !user) return;

    try {
      const res = await fetch("/api/user/by-name?name=" + encodeURIComponent(opponentName));
      if (!res.ok) throw new Error("Opponent not found");

      const opponent = await res.json();
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
      setUser(updatedData.user);
      setMatches(updatedData.matches);
    } catch (err) {
      console.error("Error submitting match:", err);
      alert("Failed to record match");
    }
  }

  function logout() {
    if (confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("token");
      router.push("/");
    }
  }

  function goToLeaderboard() {
    router.push("/leaderboard");
  }

  function goToLedger() {
    router.push("/ledger");
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p>Name: {user.name}</p>
              <p>Rating: {user.rating}</p>
            </div>
            <div>
              <button onClick={goToLedger} style={{ marginLeft: "10px" }}>
                Match History
              </button>
              <button onClick={goToLeaderboard} style={{ marginLeft: "10px" }}>
                Leaderboard
              </button>
              <button onClick={logout} style={{ marginLeft: "10px" }}>
                Logout
              </button>
            </div>
          </div>
          <div>
            <button onClick={() => handleMatch(prompt("Who did you beat?") || "", true)}>Add Win</button>
            <button onClick={() => handleMatch(prompt("Who did you lose to?") || "", false)} style={{ marginLeft: "10px" }}>
              Add Loss
            </button>
          </div>
          <h2>Match History</h2>
          {matches.length > 0 && (
            <button
              onClick={async () => {
                const latest = matches[0];
                if (!latest.undoable) return;

                const res = await fetch("/api/match/undo", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ matchId: latest.id }),
                });

                if (res.ok) {
                  const updated = await fetch("/api/user", {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                  });
                  const data = await updated.json();
                  setUser(data.user);
                  setMatches(data.matches);
                } else {
                  alert("Failed to undo match.");
                }
              }}
              disabled={matches.length === 0 || !matches[0].undoable}
              style={{cursor: matches[0]?.undoable ? "pointer" : "not-allowed",}}
            >
              Undo Last Match
            </button>
          )}
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Match</th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Winner</th>
              </tr>
            </thead>
            <tbody>
              {(showAllMatches ? matches : matches.slice(0, 10)).map((match) => {
                const p1Change = match.player1RatingAfter - match.player1RatingBefore;
                const p2Change = match.player2RatingAfter - match.player2RatingBefore;

                return (
                  <tr key={match.id}>
                    <td>
                      {match.player1.name} [{match.player1RatingBefore}] {p1Change >= 0 ? "+" : ""}{p1Change}        vs       &nbsp;
                      {match.player2.name} [{match.player2RatingBefore}] {p2Change >= 0 ? "+" : ""}{p2Change}
                    </td>
                    <td>{match.winner.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {matches.length > 10 && (
            <button onClick={() => setShowAllMatches(!showAllMatches)}>
              {showAllMatches ? "Show Less" : "Show All Matches"}
            </button>
          )}
        </>
      )}
    </main>
  );
}