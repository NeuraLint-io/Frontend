'use client';

import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';

export default function LoginPage() {

  const handleGitHubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    if (error) console.error('Login error:', error.message);
  };

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to NeuraLint</h1>
        <p className="text-gray-400">Sign in to get started</p>
        <Button onClick={handleGitHubLogin}>Sign in with GitHub</Button>
      </div>
    </main>
  );
}
