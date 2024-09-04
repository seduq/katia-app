import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { CustomerUpdateOneRequiredWithoutSchedulesNestedInputObjectSchema } from './CustomerUpdateOneRequiredWithoutSchedulesNestedInput.schema';
import { EmployeeUpdateOneRequiredWithoutScheduleNestedInputObjectSchema } from './EmployeeUpdateOneRequiredWithoutScheduleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    time: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    comment: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    price: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
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
    customer: z
      .lazy(
        () => CustomerUpdateOneRequiredWithoutSchedulesNestedInputObjectSchema,
      )
      .optional(),
    employee: z
      .lazy(
        () => EmployeeUpdateOneRequiredWithoutScheduleNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ScheduleUpdateInputObjectSchema = Schema;
