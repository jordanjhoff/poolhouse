'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LeaderboardPage() {
  const [usersWithStats, setUsersWithStats] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/leaderboard');
      const data = await res.json();
      setUsersWithStats(data);
    }
    fetchData();
  }, []);


  return (
    <main style={{ padding: '40px' }}>
      <h1>Leaderboard</h1>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Top Players</h2>
        <button
          onClick={() => router.push('/dashboard')}
        >
          Go to Dashboard
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left', padding: '10px' }}>Ranking</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left', padding: '10px' }}>Name</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left', padding: '10px' }}>ELO</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left', padding: '10px' }}>Wins</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left', padding: '10px' }}>Losses</th>
          </tr>
        </thead>
        <tbody>
          {usersWithStats.map((user, index) => (
            <tr key={user.id}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{index + 1}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.name}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.elo}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.winCount}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.lossCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
