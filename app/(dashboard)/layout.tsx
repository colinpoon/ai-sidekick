import NavBar from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <NavBar />
      <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="h-full">{children}</main>
    </div>
  );
}
