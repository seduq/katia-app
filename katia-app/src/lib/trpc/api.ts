import { loggerLink, } from "@trpc/client";
import { createTRPCNext } from "@trpc/next"
import SuperJSON from "superjson"; "superjson";
import { appRouter, AppRouter } from "@/lib/server/routers";
import { experimental_nextCacheLink as nextCacheLink } from '@trpc/next/app-dir/links/nextCache';
import { experimental_createTRPCNextAppDirServer as createTrpcNextApp } from '@trpc/next/app-dir/server';
import { transformer } from "./utils";
import { prisma } from "../db";
import { cookies } from "next/headers";


export const api = createTrpcNextApp<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        nextCacheLink({
          revalidate: 5,
          router: appRouter,
          transformer,
          createContext: async () => {
            return {
              prisma,
              headers: {
                cookie: cookies().toString(),
                'x-trpc-source': 'rsc-invoke',
              },
            };
          },
        }),
      ],
    };
  },
});