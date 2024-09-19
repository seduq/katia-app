import 'server-only';
import { cache } from "react";
import { Context } from './context';
import { headers } from 'next/headers';
import { prisma } from '../db';
import { createQueryClient } from './utils';
import { appCaller, appRouter } from '../server/routers';
import { createHydrationHelpers } from '@trpc/react-query/rsc';

export const createContext = cache((): Context => {
  const _headers = new Headers(headers());
  _headers.set('x-trpc-source', 'rsc');

  return {
    prisma,
    headers: Object.fromEntries(_headers),
  };
});

const getQueryClient = cache(createQueryClient);
const caller = appCaller(createContext);

export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
  caller,
  getQueryClient,
);
