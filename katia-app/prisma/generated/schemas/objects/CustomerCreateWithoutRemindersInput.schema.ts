import { z } from 'zod';
import { ScheduleCreateNestedManyWithoutCustomerInputObjectSchema } from './ScheduleCreateNestedManyWithoutCustomerInput.schema';
import { CommentCreateNestedManyWithoutCustomerInputObjectSchema } from './CommentCreateNestedManyWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerCreateWithoutRemindersInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    phone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    schedules: z
      .lazy(() => ScheduleCreateNestedManyWithoutCustomerInputObjectSchema)
      .optional(),
    comments: z
      .lazy(() => CommentCreateNestedManyWithoutCustomerInputObjectSchema)
      .optional(),
  })
  .strict();

export const CustomerCreateWithoutRemindersInputObjectSchema = Schema;
