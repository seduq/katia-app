import { t } from "@/prisma/generated/routers/helpers/createRouter";
import { commentsRouter as katiCommentsRouter } from "./comments";
import { customersRouter as katiaCustomersRouter } from "./customers";
import { employeesRouter as katiaEmployeesRouter } from "./employees";
import { remindersRouter as katiaRemindersRouter } from "./reminders";
import { schedulesRouter as katiaSchedulesRouter } from "./schedules";
import { commentsRouter } from "@/prisma/generated/routers/Comment.router";
import { employeesRouter } from "@/prisma/generated/routers/Employee.router";
import { remindersRouter } from "@/prisma/generated/routers/Reminder.router";
import { schedulesRouter } from "@/prisma/generated/routers/Schedule.router";
import { customersRouter } from "@/prisma/generated/routers/Customer.router";

export const katiaRouter = t.router({
  comment: t.mergeRouters(commentsRouter, katiCommentsRouter),
  customer: t.mergeRouters(customersRouter, katiaCustomersRouter),
  employee: t.mergeRouters(employeesRouter, katiaEmployeesRouter),
  reminder: t.mergeRouters(remindersRouter, katiaRemindersRouter),
  schedule: t.mergeRouters(schedulesRouter, katiaSchedulesRouter),
});

export type AppRouter = typeof katiaRouter;
