import Navbar from "@/components/NavBar";

export default function WithNavbarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container flex-1 mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </>
  );
}