import { z } from 'zod';
import { CommentCreateNestedManyWithoutCustomerInputObjectSchema } from './CommentCreateNestedManyWithoutCustomerInput.schema';
import { ReminderCreateNestedManyWithoutCustomerInputObjectSchema } from './ReminderCreateNestedManyWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerCreateWithoutSchedulesInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    phone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    comments: z
      .lazy(() => CommentCreateNestedManyWithoutCustomerInputObjectSchema)
      .optional(),
    reminders: z
      .lazy(() => ReminderCreateNestedManyWithoutCustomerInputObjectSchema)
      .optional(),
  })
  .strict();

export const CustomerCreateWithoutSchedulesInputObjectSchema = Schema;
