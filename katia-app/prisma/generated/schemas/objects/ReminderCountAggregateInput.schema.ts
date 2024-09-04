import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReminderCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    comment: z.literal(true).optional(),
    date: z.literal(true).optional(),
    desmissed: z.literal(true).optional(),
    customerId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ReminderCountAggregateInputObjectSchema = Schema;
