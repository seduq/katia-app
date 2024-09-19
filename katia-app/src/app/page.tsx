/**
 * Reminder List -> Dismiss -> Snooze
 * Reminder Form
 */

import { Toaster } from "@/components/ui/sonner";
import { Structure } from "./(app)/(structure)";
import {TrpcProvider} from "@/lib/trpc/client";
import { cookies } from "next/headers";

export default function Home() {
  return (
    <main>
      <TrpcProvider cookies={cookies().toString()}>
        <Structure></Structure>
        <Toaster richColors />
      </TrpcProvider>
    </main>
  );
}
