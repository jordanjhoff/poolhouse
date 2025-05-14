'use client';

import { Leaderboard } from '@/components/leaderboard';
import { NavBar } from '@/components/navbar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LeaderboardPage() {
  const [usersWithStats, setUsersWithStats] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/user/leaderboard');
      const data = await res.json();
      console.log("Fetched Users:", data);
      setUsersWithStats(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <Leaderboard players={usersWithStats} />
      </main>
    </>
  );
}