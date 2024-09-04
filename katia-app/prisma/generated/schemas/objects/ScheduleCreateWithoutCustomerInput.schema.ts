import { z } from 'zod';
import { EmployeeCreateNestedOneWithoutScheduleInputObjectSchema } from './EmployeeCreateNestedOneWithoutScheduleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleCreateWithoutCustomerInput> = z
  .object({
    id: z.string().optional(),
    time: z.coerce.date(),
    comment: z.string(),
    price: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    employee: z.lazy(
      () => EmployeeCreateNestedOneWithoutScheduleInputObjectSchema,
    ),
  })
  .strict();

export const ScheduleCreateWithoutCustomerInputObjectSchema = Schema;
