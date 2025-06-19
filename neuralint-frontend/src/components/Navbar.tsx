'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };
    getUser();

    // optional: auto-update on login/logout
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/'; // optional redirect after logout
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <Link href="/" className="text-xl font-bold">
        NeuraLint
      </Link>

      {user ? (
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost">Dashboard</Button>
          </Link>

          <Avatar className="h-8 w-8">
            <AvatarFallback>
              {user.email[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <Button variant="outline" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <Link href="/">
          <Button variant="default" size="sm">
            Sign In
          </Button>
        </Link>
      )}
    </nav>
  );
}
