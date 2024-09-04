import { z } from 'zod';
import { ScheduleUncheckedCreateNestedManyWithoutCustomerInputObjectSchema } from './ScheduleUncheckedCreateNestedManyWithoutCustomerInput.schema';
import { ReminderUncheckedCreateNestedManyWithoutCustomerInputObjectSchema } from './ReminderUncheckedCreateNestedManyWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutCommentsInput> = z
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
    reminders: z
      .lazy(
        () => ReminderUncheckedCreateNestedManyWithoutCustomerInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CustomerUncheckedCreateWithoutCommentsInputObjectSchema = Schema;
