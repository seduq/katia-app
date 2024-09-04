import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReminderCreateWithoutCustomerInput> = z
  .object({
    id: z.string().optional(),
    comment: z.string(),
    date: z.coerce.date(),
    desmissed: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const ReminderCreateWithoutCustomerInputObjectSchema = Schema;
