'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 text-center">
      <Image
        src="/logo_icon.png"
        alt="NeuraLint Logo"
        width={64}
        height={64}
        className="mb-6"
      />
      <h1 className="text-4xl font-bold font-sans mb-4">NeuraLint</h1>
      <p className="text-muted-foreground text-lg max-w-xl mb-8 font-sans">
        Explain, secure, and summarize your codebase with AI. NeuraLint brings intelligence to your workflow — powered by GPT, Claude, and Gemini.
      </p>

      <Link href="/dashboard">
        <Button size="lg" className="flex items-center gap-2">
          <Github className="w-5 h-5" />
          Sign in with GitHub
        </Button>
      </Link>

      <div className="mt-10 text-sm text-muted-foreground space-x-4">
        <a href="https://github.com/YOUR_USERNAME/neuralint-frontend" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="https://neuralint-docs.vercel.app" className="hover:underline">
          Docs
        </a>
      </div>
    </div>
  );
}
