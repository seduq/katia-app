import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { CustomerRelationFilterObjectSchema } from './CustomerRelationFilter.schema';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { EmployeeRelationFilterObjectSchema } from './EmployeeRelationFilter.schema';
import { EmployeeWhereInputObjectSchema } from './EmployeeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ScheduleWhereInputObjectSchema),
        z.lazy(() => ScheduleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ScheduleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ScheduleWhereInputObjectSchema),
        z.lazy(() => ScheduleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    time: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    comment: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    price: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    customerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    employeeId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    customer: z
      .union([
        z.lazy(() => CustomerRelationFilterObjectSchema),
        z.lazy(() => CustomerWhereInputObjectSchema),
      ])
      .optional(),
    employee: z
      .union([
        z.lazy(() => EmployeeRelationFilterObjectSchema),
        z.lazy(() => EmployeeWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ScheduleWhereInputObjectSchema = Schema;
