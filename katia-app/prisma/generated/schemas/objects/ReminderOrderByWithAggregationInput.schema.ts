import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReminderCountOrderByAggregateInputObjectSchema } from './ReminderCountOrderByAggregateInput.schema';
import { ReminderMaxOrderByAggregateInputObjectSchema } from './ReminderMaxOrderByAggregateInput.schema';
import { ReminderMinOrderByAggregateInputObjectSchema } from './ReminderMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReminderOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    comment: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    desmissed: z.lazy(() => SortOrderSchema).optional(),
    customerId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ReminderCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ReminderMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ReminderMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ReminderOrderByWithAggregationInputObjectSchema = Schema;
