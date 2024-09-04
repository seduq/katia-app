import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleUncheckedCreateWithoutEmployeeInput> = z
  .object({
    id: z.string().optional(),
    time: z.coerce.date(),
    comment: z.string(),
    price: z.number(),
    customerId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const ScheduleUncheckedCreateWithoutEmployeeInputObjectSchema = Schema;
