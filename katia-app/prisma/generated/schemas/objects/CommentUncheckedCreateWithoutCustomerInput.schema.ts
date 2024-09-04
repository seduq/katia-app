import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedCreateWithoutCustomerInput> = z
  .object({
    id: z.string().optional(),
    comment: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const CommentUncheckedCreateWithoutCustomerInputObjectSchema = Schema;
