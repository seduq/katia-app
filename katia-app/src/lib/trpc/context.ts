import { prisma } from "@/lib/db/index"

export async function createTRPCContext(opts: { headers: Headers }) {
  return {
    prisma,
    ...opts,
  }
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
