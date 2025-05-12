"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    });

    if (res.status === 409) {
      setError('Username is taken');
      return;
    }

    if (!res.ok) {
      setError('Registration failed');
      return;
    }

    router.push('/dashboard');
  }

  return (
    <main style={{ padding: 40, maxWidth: 400, margin: '0 auto' }}>
      <h1>Create Account</h1>
      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
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
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}
    </main>
  );
}