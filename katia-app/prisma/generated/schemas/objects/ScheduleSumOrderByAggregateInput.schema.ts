import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleSumOrderByAggregateInput> = z
  .object({
    price: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ScheduleSumOrderByAggregateInputObjectSchema = Schema;
