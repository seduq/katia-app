/**
 * Reminder List -> Dismiss -> Snooze
 * Reminder Form
 */

import { Toaster } from "@/components/ui/sonner";
import TrpcProvider from "@/lib/trpc/provider";
import { cookies } from "next/headers";
import { Structure } from "./(app)/(structure)/page";

export default function Home() {
  return (
    <main>
      <TrpcProvider cookies={cookies().toString()}>
        <Structure></Structure>
      </TrpcProvider>

      <Toaster richColors />
    </main>
  );
}
