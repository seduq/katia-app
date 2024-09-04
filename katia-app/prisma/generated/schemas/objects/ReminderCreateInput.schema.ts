import { z } from 'zod';
import { CustomerCreateNestedOneWithoutRemindersInputObjectSchema } from './CustomerCreateNestedOneWithoutRemindersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReminderCreateInput> = z
  .object({
    id: z.string().optional(),
    comment: z.string(),
    date: z.coerce.date(),
    desmissed: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    customer: z.lazy(
      () => CustomerCreateNestedOneWithoutRemindersInputObjectSchema,
    ),
  })
  .strict();

export const ReminderCreateInputObjectSchema = Schema;
