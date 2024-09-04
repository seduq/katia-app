import { z } from 'zod';
import { ScheduleCreateNestedManyWithoutCustomerInputObjectSchema } from './ScheduleCreateNestedManyWithoutCustomerInput.schema';
import { ReminderCreateNestedManyWithoutCustomerInputObjectSchema } from './ReminderCreateNestedManyWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerCreateWithoutCommentsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    phone: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    schedules: z
      .lazy(() => ScheduleCreateNestedManyWithoutCustomerInputObjectSchema)
      .optional(),
    reminders: z
      .lazy(() => ReminderCreateNestedManyWithoutCustomerInputObjectSchema)
      .optional(),
  })
  .strict();

export const CustomerCreateWithoutCommentsInputObjectSchema = Schema;
