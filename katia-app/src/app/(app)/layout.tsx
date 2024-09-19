import { Toaster } from "@/components/ui/sonner";
import { cookies } from "next/headers";
import { Structure } from "./(structure)";
import { TrpcProvider } from "@/lib/trpc/client";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TrpcProvider>
      <Structure>{children}</Structure>
      <Toaster richColors />
    </TrpcProvider>
  );
}
