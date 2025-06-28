'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function SupabaseLogin() {
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
  };

  return (
    <button
      onClick={handleSignIn}
      className="px-4 py-2 rounded bg-white text-black font-semibold hover:bg-gray-200"
    >
      Sign in with GitHub
    </button>
  );
}
