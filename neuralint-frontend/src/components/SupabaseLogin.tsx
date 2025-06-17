'use client';

import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export default function SupabaseLogin() {
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });

    if (error) console.error('Login error:', error);
    else router.push('/dashboard');
  };

  return (
    <Button onClick={handleLogin} className="gap-2" size="lg">
      <Github className="w-4 h-4" />
      Sign in with GitHub
    </Button>
  );
}
