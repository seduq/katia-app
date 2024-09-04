import { z } from 'zod';
import { ScheduleWhereUniqueInputObjectSchema } from './objects/ScheduleWhereUniqueInput.schema';

export const ScheduleDeleteOneSchema = z.object({
  where: ScheduleWhereUniqueInputObjectSchema,
});
