import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleSumAggregateInputType> = z
  .object({
    price: z.literal(true).optional(),
  })
  .strict();

export const ScheduleSumAggregateInputObjectSchema = Schema;
