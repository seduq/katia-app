import { z } from 'zod';
import { CustomerCreateNestedOneWithoutSchedulesInputObjectSchema } from './CustomerCreateNestedOneWithoutSchedulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleCreateWithoutEmployeeInput> = z
  .object({
    id: z.string().optional(),
    time: z.coerce.date(),
    comment: z.string(),
    price: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    customer: z.lazy(
      () => CustomerCreateNestedOneWithoutSchedulesInputObjectSchema,
    ),
  })
  .strict();

export const ScheduleCreateWithoutEmployeeInputObjectSchema = Schema;
