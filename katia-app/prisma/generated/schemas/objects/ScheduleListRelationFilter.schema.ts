import { z } from 'zod';
import { ScheduleWhereInputObjectSchema } from './ScheduleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleListRelationFilter> = z
  .object({
    every: z.lazy(() => ScheduleWhereInputObjectSchema).optional(),
    some: z.lazy(() => ScheduleWhereInputObjectSchema).optional(),
    none: z.lazy(() => ScheduleWhereInputObjectSchema).optional(),
  })
  .strict();

export const ScheduleListRelationFilterObjectSchema = Schema;
