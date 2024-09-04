import { createTRPCReact } from "@trpc/react-query";

import { AppRouter } from "@/lib/server/routers";

export const trpc = createTRPCReact<AppRouter>({});
