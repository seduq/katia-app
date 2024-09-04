import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerOrderByWithRelationInputObjectSchema } from './CustomerOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    comment: z.lazy(() => SortOrderSchema).optional(),
    customerId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    customer: z
      .lazy(() => CustomerOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const CommentOrderByWithRelationInputObjectSchema = Schema;
