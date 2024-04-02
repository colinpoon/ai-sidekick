import { Button } from '@/components/ui/button';
import { SignIn, SignUp, UserButton } from '@clerk/nextjs';
import { Link } from 'lucide-react';

const RootPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-3xl font-bold">root page (protected)</div>
    </div>
  );
};

export default RootPage;
