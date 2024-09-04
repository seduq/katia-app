import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CustomerRelationFilterObjectSchema } from './CustomerRelationFilter.schema';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CommentWhereInputObjectSchema),
        z.lazy(() => CommentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CommentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CommentWhereInputObjectSchema),
        z.lazy(() => CommentWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    comment: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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

export const CommentWhereInputObjectSchema = Schema;
