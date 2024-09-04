import { z } from 'zod';
import { ScheduleUncheckedCreateNestedManyWithoutCustomerInputObjectSchema } from './ScheduleUncheckedCreateNestedManyWithoutCustomerInput.schema';
import { CommentUncheckedCreateNestedManyWithoutCustomerInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutRemindersInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    phone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    schedules: z
      .lazy(
        () => ScheduleUncheckedCreateNestedManyWithoutCustomerInputObjectSchema,
      )
      .optional(),
    comments: z
      .lazy(
        () => CommentUncheckedCreateNestedManyWithoutCustomerInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CustomerUncheckedCreateWithoutRemindersInputObjectSchema = Schema;
