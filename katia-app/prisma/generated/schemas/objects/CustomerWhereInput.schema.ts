import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ScheduleListRelationFilterObjectSchema } from './ScheduleListRelationFilter.schema';
import { CommentListRelationFilterObjectSchema } from './CommentListRelationFilter.schema';
import { ReminderListRelationFilterObjectSchema } from './ReminderListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CustomerWhereInputObjectSchema),
        z.lazy(() => CustomerWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CustomerWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CustomerWhereInputObjectSchema),
        z.lazy(() => CustomerWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    phone: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    schedules: z.lazy(() => ScheduleListRelationFilterObjectSchema).optional(),
    comments: z.lazy(() => CommentListRelationFilterObjectSchema).optional(),
    reminders: z.lazy(() => ReminderListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const CustomerWhereInputObjectSchema = Schema;
