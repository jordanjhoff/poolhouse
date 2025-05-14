"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



type Match = {
  id: string;
  player1: { name: string };
  player2: { name: string };
  winner: { name: string };
  player1RatingBefore: number;
  player2RatingBefore: number;
  player1RatingAfter: number;
  player2RatingAfter: number;
  createdAt: string;
};

export default function MatchLedger() {
  const router = useRouter();
  const [matches, setMatches] = useState<Match[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`/api/match/ledger?page=${page}&pageSize=${pageSize}`)
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.matches);
        setTotalPages(data.totalPages);
      });
  }, [page, pageSize]);

  const prevPage = () => setPage((p) => Math.max(p - 1, 1));
  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages));

  return (
    <main style={{ padding: 40 }}>

      <h1>Match Ledger</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Recent Matches</h2>
        <button
          onClick={() => router.push('/dashboard')}
        >
          Go to Dashboard
        </button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Match</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Winner</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Time</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => {
            const p1Change = match.player1RatingAfter - match.player1RatingBefore;
            const p2Change = match.player2RatingAfter - match.player2RatingBefore;

            return (
              <tr key={match.id}>
                <td>
                  {match.player1.name} [{match.player1RatingBefore}] {p1Change >= 0 ? "+" : ""}{p1Change}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {match.player2.name} [{match.player2RatingBefore}] {p2Change >= 0 ? "+" : ""}{p2Change}
                </td>
                <td>{match.winner.name}</td>
                <td>{new Date(match.createdAt).toLocaleString()}</td> 
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={prevPage} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </main>
  );
}