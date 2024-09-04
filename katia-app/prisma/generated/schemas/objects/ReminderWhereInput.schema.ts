import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { CustomerRelationFilterObjectSchema } from './CustomerRelationFilter.schema';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReminderWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReminderWhereInputObjectSchema),
        z.lazy(() => ReminderWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReminderWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReminderWhereInputObjectSchema),
        z.lazy(() => ReminderWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    comment: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    desmissed: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    customerId: z
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
  })
  .strict();

export const ReminderWhereInputObjectSchema = Schema;
