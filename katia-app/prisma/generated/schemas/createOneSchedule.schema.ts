import { z } from 'zod';
import { ScheduleCreateInputObjectSchema } from './objects/ScheduleCreateInput.schema';
import { ScheduleUncheckedCreateInputObjectSchema } from './objects/ScheduleUncheckedCreateInput.schema';

export const ScheduleCreateOneSchema = z.object({
  data: z.union([
    ScheduleCreateInputObjectSchema,
    ScheduleUncheckedCreateInputObjectSchema,
  ]),
});
