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
    console.log("Retrieved token:", token);

    if (!token) {
      router.push("/");
    } else {
      fetch("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log("User API response status:", res.status);
          if (!res.ok) throw new Error("Failed to fetch user");
          return res.json();
        })
        .then((data) => {
          console.log("User API response JSON:", data);
          if (data.error) {
            setError(data.error);
            router.push("/");
          } else {
            setUser(data.user);
            setMatches(data.matches);
          }
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
          setError("Failed to load user data");
          localStorage.removeItem("token");
          router.push("/");
        });
    }
  }, [router]);

  async function addWin() {
    const opponentName = prompt("Who did you beat?");
    if (!opponentName || !user) return;

    console.log("Adding match against:", opponentName);

    try {
      const res = await fetch("/api/user/by-name?name=" + encodeURIComponent(opponentName));
      if (!res.ok) throw new Error("Opponent not found");

      const opponent = await res.json();
      console.log("Opponent:", opponent);

      const matchRes = await fetch("/api/match", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          player1Id: user.id,
          player2Id: opponent.id,
          winnerId: user.id,
        }),
      });

      if (!matchRes.ok) throw new Error("Failed to create match");

      const token = localStorage.getItem("token");
      const updatedRes = await fetch("/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!updatedRes.ok) throw new Error("Failed to refresh user data");

      const updatedData = await updatedRes.json();
      setUser(updatedData.user);
      setMatches(updatedData.matches);
    } catch (err) {
      console.error("Error adding match:", err);
      alert("Failed to add match");
    }
  }

  async function addLoss() {
    const opponentName = prompt("Who did you lose to?");
    if (!opponentName || !user) return;
  
    console.log("Adding loss against:", opponentName);
  
    try {
      const res = await fetch("/api/user/by-name?name=" + encodeURIComponent(opponentName));
      if (!res.ok) throw new Error("Opponent not found");
  
      const opponent = await res.json();
      console.log("Opponent:", opponent);
  
      const matchRes = await fetch("/api/match", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          player1Id: user.id,
          player2Id: opponent.id,
          winnerId: opponent.id,
        }),
      });
  
      if (!matchRes.ok) throw new Error("Failed to create match");
  
      const token = localStorage.getItem("token");
      const updatedRes = await fetch("/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (!updatedRes.ok) throw new Error("Failed to refresh user data");
  
      const updatedData = await updatedRes.json();
      setUser(updatedData.user);
      setMatches(updatedData.matches);
    } catch (err) {
      console.error("Error adding loss:", err);
      alert("Failed to add loss");
    }
  }

  function logout() {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      router.push("/");
    }
  }

  function goToLeaderboard() {
    router.push("/leaderboard");
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
              <p>ELO: {user.elo}</p>
            </div>
            <div>
              <button onClick={goToLeaderboard} style={{ marginLeft: "10px" }}>
                Leaderboard
              </button>
              <button onClick={logout} style={{ marginLeft: "10px" }}>
                Logout
              </button>
            </div>
          </div>
          <div>
            <button onClick={addWin}>Add Win</button>
            <button onClick={addLoss} style={{ marginLeft: "10px" }}>
              Add Loss
            </button>
          </div>
          <h2>Match History</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Match</th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Winner</th>
              </tr>
            </thead>
            <tbody>
              {(showAllMatches ? matches : matches.slice(0, 10)).map((match) => (
                <tr key={match.id}>
                  <td>
                    {match.player1.name} ({match.player1eloChange >= 0 ? `+${match.player1eloChange}` : match.player1eloChange}) vs&nbsp;
                    {match.player2.name} ({match.player2eloChange >= 0 ? `+${match.player2eloChange}` : match.player2eloChange})
                  </td>
                  <td>{match.winner.name}</td>
                </tr>
              ))}
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