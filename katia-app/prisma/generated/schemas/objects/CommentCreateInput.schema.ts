import { z } from 'zod';
import { CustomerCreateNestedOneWithoutCommentsInputObjectSchema } from './CustomerCreateNestedOneWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateInput> = z
  .object({
    id: z.string().optional(),
    comment: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    customer: z.lazy(
      () => CustomerCreateNestedOneWithoutCommentsInputObjectSchema,
    ),
  })
  .strict();

export const CommentCreateInputObjectSchema = Schema;
