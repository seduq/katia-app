import { z } from 'zod';
import { ScheduleWhereUniqueInputObjectSchema } from './objects/ScheduleWhereUniqueInput.schema';

export const ScheduleFindUniqueSchema = z.object({
  where: ScheduleWhereUniqueInputObjectSchema,
});
