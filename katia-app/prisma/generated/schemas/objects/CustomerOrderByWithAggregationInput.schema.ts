import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerCountOrderByAggregateInputObjectSchema } from './CustomerCountOrderByAggregateInput.schema';
import { CustomerMaxOrderByAggregateInputObjectSchema } from './CustomerMaxOrderByAggregateInput.schema';
import { CustomerMinOrderByAggregateInputObjectSchema } from './CustomerMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CustomerCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => CustomerMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CustomerMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CustomerOrderByWithAggregationInputObjectSchema = Schema;
