import { createCallerFactory, router } from "../trpc/trpc";
import { commentsRouter as commentsRouter } from "./comments";
import { customersRouter as customersRouter } from "./customers";
import { employeesRouter as employeesRouter } from "./employees";
import { remindersRouter as remindersRouter } from "./reminders";
import { schedulesRouter as schedulesRouter } from "./schedules";

export const appRouter = router({
  comment: commentsRouter,
  customer: customersRouter,
  employee: employeesRouter,
  reminder: remindersRouter,
  schedule: schedulesRouter,
});


export type AppRouter = typeof appRouter;
export const appCaller = createCallerFactory(appRouter);