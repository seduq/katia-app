import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ScheduleListRelationFilterObjectSchema } from './ScheduleListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EmployeeWhereInputObjectSchema),
        z.lazy(() => EmployeeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EmployeeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EmployeeWhereInputObjectSchema),
        z.lazy(() => EmployeeWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    Schedule: z.lazy(() => ScheduleListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const EmployeeWhereInputObjectSchema = Schema;
