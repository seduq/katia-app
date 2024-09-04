import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ScheduleUpdateManyWithoutCustomerNestedInputObjectSchema } from './ScheduleUpdateManyWithoutCustomerNestedInput.schema';
import { CommentUpdateManyWithoutCustomerNestedInputObjectSchema } from './CommentUpdateManyWithoutCustomerNestedInput.schema';
import { ReminderUpdateManyWithoutCustomerNestedInputObjectSchema } from './ReminderUpdateManyWithoutCustomerNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    phone: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    schedules: z
      .lazy(() => ScheduleUpdateManyWithoutCustomerNestedInputObjectSchema)
      .optional(),
    comments: z
      .lazy(() => CommentUpdateManyWithoutCustomerNestedInputObjectSchema)
      .optional(),
    reminders: z
      .lazy(() => ReminderUpdateManyWithoutCustomerNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CustomerUpdateInputObjectSchema = Schema;
