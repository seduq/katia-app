import { t } from "./helpers/createRouter";
import { customersRouter } from "./Customer.router";
import { commentsRouter } from "./Comment.router";
import { remindersRouter } from "./Reminder.router";
import { employeesRouter } from "./Employee.router";
import { schedulesRouter } from "./Schedule.router";

export const appRouter = t.router({
  customer: customersRouter,
  comment: commentsRouter,
  reminder: remindersRouter,
  employee: employeesRouter,
  schedule: schedulesRouter
})

