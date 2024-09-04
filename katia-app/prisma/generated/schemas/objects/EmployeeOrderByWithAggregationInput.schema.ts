import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EmployeeCountOrderByAggregateInputObjectSchema } from './EmployeeCountOrderByAggregateInput.schema';
import { EmployeeMaxOrderByAggregateInputObjectSchema } from './EmployeeMaxOrderByAggregateInput.schema';
import { EmployeeMinOrderByAggregateInputObjectSchema } from './EmployeeMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => EmployeeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => EmployeeMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => EmployeeMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const EmployeeOrderByWithAggregationInputObjectSchema = Schema;
