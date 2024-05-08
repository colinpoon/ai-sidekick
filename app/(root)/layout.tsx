import NavBar from '@/components/navbar';

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
  );
}
