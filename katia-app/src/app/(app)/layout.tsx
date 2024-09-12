import { Toaster } from "@/components/ui/sonner";
import TrpcProvider from "@/lib/trpc/provider";
import { cookies } from "next/headers";
import { Structure } from "./(structure)/page";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TrpcProvider cookies={cookies().toString()}>
        <Structure>{children}</Structure>
      </TrpcProvider>
      <Toaster richColors />
    </>
  );
}
