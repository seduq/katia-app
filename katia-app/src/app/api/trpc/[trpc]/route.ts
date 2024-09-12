import { createNextApiHandler, NextApiRequest, NextApiHandler } from "@trpc/server/adapters/next";
import { NextRequest } from "next/server";
import { createTRPCContext } from "@/lib/trpc/context";
import { env } from "@/lib/env.mjs";
import { appRouter } from "@/lib/server/routers";

const createContext = async (req: NextRequest) => {
  return createTRPCContext({
    headers: req.headers,
  });
};
const handler = (req: NextRequest) =>
  createNextApiHandler({
    //endpoint: "/api/trpc",
    //req,
    router: appRouter,
    createContext: () => createContext(req),
    onError:
      env.NODE_ENV === "development"
        ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
        : undefined,
  });

export { handler as GET, handler as POST };
