import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ScheduleOrderByRelationAggregateInputObjectSchema } from './ScheduleOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    Schedule: z
      .lazy(() => ScheduleOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const EmployeeOrderByWithRelationInputObjectSchema = Schema;
