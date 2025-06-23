'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };

    getUser();
    const { data: listener } = supabase.auth.onAuthStateChange((_e, session) =>
      setUser(session?.user || null)
    );
    return () => listener?.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    location.reload();
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b">
      <Link href="/" className="text-xl font-bold">NeuraLint</Link>

      {user ? (
        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <Button variant="ghost">Dashboard</Button>
          </Link>
          <Avatar className="h-8 w-8">
            <AvatarFallback>{user.email?.[0]?.toUpperCase() ?? ''}</AvatarFallback>
          </Avatar>
          <Button size="sm" onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <Button size="sm" onClick={() => supabase.auth.signInWithOAuth({ provider: 'github' })}>
          Sign In
        </Button>
      )}
    </header>
  );
}
