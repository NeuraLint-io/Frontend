// /app/login/page.tsx
'use client'

import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/dashboard', // adjust for production
      },
    })
  }

  return (
    <div className="flex justify-center mt-32">
      <Button onClick={handleLogin}>Sign in with GitHub</Button>
    </div>
  )
}
