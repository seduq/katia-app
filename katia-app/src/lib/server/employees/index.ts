import {
  router,
} from "@/lib/trpc/trpc";
import { mutations } from "./mutations";
import { queries } from "./queries";

export const employeesRouter = router({
  ...mutations,
  ...queries
}) 