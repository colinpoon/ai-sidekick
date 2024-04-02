import { SignIn, SignUp, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <NavBar />
      <main className="h-full pt-16 pb-10 px-10">{children}</main>
    </div>
    // <div className="w-full flex flex-row items-center justify-end gap-5 p-8">
    //   <Link href={'/sign-up'}>
    //     <Button variant="default" className="">
    //       Login
    //     </Button>
    //   </Link>
    //   <Link href={'/sign-up'}>
    //     <Button variant="default" className="">
    //       Free Trial
    //     </Button>
    //   </Link>
    // </div>
  );
}
