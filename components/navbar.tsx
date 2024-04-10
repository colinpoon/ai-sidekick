'use client';
import { UserButton } from '@clerk/nextjs';
import { Menu } from 'lucide-react';

export default function NavBar() {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center p-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <Menu className="block md:hidden" />
      </div>
      <div className="border rounded-full border-black">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
