import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ScheduleOrderByRelationAggregateInputObjectSchema } from './ScheduleOrderByRelationAggregateInput.schema';
import { CommentOrderByRelationAggregateInputObjectSchema } from './CommentOrderByRelationAggregateInput.schema';
import { ReminderOrderByRelationAggregateInputObjectSchema } from './ReminderOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    schedules: z
      .lazy(() => ScheduleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    comments: z
      .lazy(() => CommentOrderByRelationAggregateInputObjectSchema)
      .optional(),
    reminders: z
      .lazy(() => ReminderOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CustomerOrderByWithRelationInputObjectSchema = Schema;
