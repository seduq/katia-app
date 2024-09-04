import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ScheduleUncheckedUpdateManyWithoutCustomerNestedInputObjectSchema } from './ScheduleUncheckedUpdateManyWithoutCustomerNestedInput.schema';
import { CommentUncheckedUpdateManyWithoutCustomerNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutCustomerNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUncheckedUpdateWithoutRemindersInput> = z
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
      .lazy(
        () => ScheduleUncheckedUpdateManyWithoutCustomerNestedInputObjectSchema,
      )
      .optional(),
    comments: z
      .lazy(
        () => CommentUncheckedUpdateManyWithoutCustomerNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CustomerUncheckedUpdateWithoutRemindersInputObjectSchema = Schema;
