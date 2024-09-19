import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { prisma } from '../db';

async function createContext(opts?: FetchCreateContextFnOptions) {
  return {
    prisma,
    headers: opts && Object.fromEntries(opts.req?.headers),
  }
}


export type Context = Awaited<ReturnType<typeof createContext>>;
