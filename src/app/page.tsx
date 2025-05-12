"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    });

    if (!res.ok) {
      setError('Login failed');
      return;
    }

    const { token } = await res.json();
    localStorage.setItem('token', token);
    router.push('/dashboard');
  }

  return (
    <main style={{ padding: 40, maxWidth: 400, margin: '0 auto' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}

      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => router.push('/register')}>Register</button>
        <button onClick={() => router.push('/leaderboard')}>Leaderboard</button>
      </div>
    </main>
  );
}