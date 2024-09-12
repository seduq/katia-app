import "server-only";

import {
  httpBatchLink,
  loggerLink,
} from "@trpc/client";

import { createTRPCNext } from "@trpc/next"

import SuperJSON from "superjson"; "superjson";
import { appRouter } from "@/lib/server/routers";
import { getUrl } from "./utils";

export const api = createTRPCNext<typeof appRouter>({
  transformer: SuperJSON,
  config() {/**
    * If you want to use SSR, you need to use the server's full URL
    * @link https://trpc.io/docs/v11/ssr
    */
    return {
      /**
       * @link https://trpc.io/docs/v11/client/links
       */
      links: [
        // adds pretty logs to your console in development and logs errors in production
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getUrl()}`,
          /**
           * @link https://trpc.io/docs/v11/data-transformers
           */
          transformer: SuperJSON,
        }),
      ],
      /**
       * @link https://tanstack.com/query/v5/docs/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/v11/ssr
   */
  ssr: false,
});
