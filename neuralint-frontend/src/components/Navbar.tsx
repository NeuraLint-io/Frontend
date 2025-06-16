'use client';

import { ModeToggle } from './ModeToggle';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="flex items-center justify-between py-4 px-6 border-b bg-background">
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Image src="/logo_icon.png" alt="NeuraLint Logo" width={32} height={32} />
          <span className="text-xl font-bold font-sans tracking-tight">
            NeuraLint
          </span>
        </div>
      </Link>
      <ModeToggle />
    </header>
  );
}
