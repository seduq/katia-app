import * as trpc from "@trpc/server";

import type { Context } from "@/lib/trpc/context";
import SuperJSON from "superjson";
import { ZodError } from "zod";

export const t = trpc.initTRPC.context<Context>().create({
  transformer: SuperJSON,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const publicProcedure = t.procedure;
