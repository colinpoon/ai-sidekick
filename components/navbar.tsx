'use client';
import { UserButton } from '@clerk/nextjs';
import { Menu, Sparkle } from 'lucide-react';
import { Barlow, Inter } from 'next/font/google';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';

const textFont = Inter({
  weight: '600',
  subsets: ['latin'],
});
const displayFont = Barlow({
  weight: '600',
  subsets: ['latin'],
});

export default function NavBar() {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center p-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <Menu className="block md:hidden" />
        <Link href="/">
          <h1
            className={cn(
              'hidden md:block text-xl md:text-xl font-extrabold text-primary',
              // textFont.className
              displayFont.className
              // dynamic class name
            )}
          >
            ai.sidekick
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button size="sm">
          Upgrade
          <Sparkle className="h-4 w-4 fill-white text-white ml-2" />
        </Button>
        <ModeToggle />
        <div className="border rounded-full border-black ">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}
