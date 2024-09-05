import Navbar from "@/components/layout/Navbar/Navbar";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import TrpcProvider from "@/lib/trpc/provider";
import { cookies } from "next/headers";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <TrpcProvider cookies={cookies().toString()}>
        <div className="flex h-screen">
          <Sidebar></Sidebar>
          <main className="flex-1 md:p-8 pt-2 p-8 overflow-y-auto">
            <Navbar></Navbar>
            {children}
          </main>
        </div>
      </TrpcProvider>

      <Toaster richColors />
    </main>
  );
}
