import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ScheduleCountOrderByAggregateInputObjectSchema } from './ScheduleCountOrderByAggregateInput.schema';
import { ScheduleAvgOrderByAggregateInputObjectSchema } from './ScheduleAvgOrderByAggregateInput.schema';
import { ScheduleMaxOrderByAggregateInputObjectSchema } from './ScheduleMaxOrderByAggregateInput.schema';
import { ScheduleMinOrderByAggregateInputObjectSchema } from './ScheduleMinOrderByAggregateInput.schema';
import { ScheduleSumOrderByAggregateInputObjectSchema } from './ScheduleSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    time: z.lazy(() => SortOrderSchema).optional(),
    comment: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    customerId: z.lazy(() => SortOrderSchema).optional(),
    employeeId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ScheduleCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ScheduleAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ScheduleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ScheduleMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ScheduleSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ScheduleOrderByWithAggregationInputObjectSchema = Schema;
