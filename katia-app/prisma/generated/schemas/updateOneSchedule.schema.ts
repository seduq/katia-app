import { z } from 'zod';
import { ScheduleUpdateInputObjectSchema } from './objects/ScheduleUpdateInput.schema';
import { ScheduleUncheckedUpdateInputObjectSchema } from './objects/ScheduleUncheckedUpdateInput.schema';
import { ScheduleWhereUniqueInputObjectSchema } from './objects/ScheduleWhereUniqueInput.schema';

export const ScheduleUpdateOneSchema = z.object({
  data: z.union([
    ScheduleUpdateInputObjectSchema,
    ScheduleUncheckedUpdateInputObjectSchema,
  ]),
  where: ScheduleWhereUniqueInputObjectSchema,
});
