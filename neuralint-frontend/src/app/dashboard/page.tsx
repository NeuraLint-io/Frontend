'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function DashboardPage() {
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user && data.user.email) setUser({ email: data.user.email });
    };
    getUser();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome {user?.email || 'loading...'}</h1>
    </div>
  );
}
