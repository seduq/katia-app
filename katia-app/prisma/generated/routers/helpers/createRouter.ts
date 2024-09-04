import * as trpc from "@trpc/server";

import type { Context } from '@/lib/trpc/context';

import trpcOptions from '@/lib/trpc/options';

export const t = trpc.initTRPC.context<Context>().create(trpcOptions);

export const publicProcedure = t.procedure;



