import { prisma } from "@/lib/db/index"
import { cookies } from "next/headers";
import { cache } from "react";

export async function createTRPCContext(opts: { headers: Headers }) {
  return {
    prisma,
    ...opts,
  }
}

export const createContext = cache(() => {
  return createTRPCContext({
    headers: new Headers({
      cookie: cookies().toString(),
      "x-trpc-source": "rsc",
    }),
  });
});

export type Context = Awaited<ReturnType<typeof createContext>>;
