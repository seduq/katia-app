import { appRouter } from "@/prisma/generated/routers";
import { t } from "@/prisma/generated/routers/helpers/createRouter";
import { commentsRouter } from "./comments";
import { customersRouter } from "./customers";
import { employeesRouter } from "./employees";
import { remindersRouter } from "./reminders";
import { schedulesRouter } from "./schedules";

const katiaRouter = t.router({
  comment: commentsRouter,
  customer: customersRouter,
  employee: employeesRouter,
  reminder: remindersRouter,
  schedule: schedulesRouter,
});

export const combinedRouter = t.mergeRouters(appRouter, katiaRouter);
export type AppRouter = typeof combinedRouter;
