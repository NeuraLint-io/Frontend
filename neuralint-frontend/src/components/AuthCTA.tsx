'use client';

import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export default function AuthCTA() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'github' });
  };

  return (
    <Button
      onClick={handleLogin}
      className="text-base px-6 py-3 font-semibold shadow-md"
    >
      <Github className="mr-2 h-4 w-4" />
      Sign in with GitHub
    </Button>
  );
}
