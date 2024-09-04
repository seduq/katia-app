import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentCreateWithoutCustomerInputObjectSchema } from './CommentCreateWithoutCustomerInput.schema';
import { CommentUncheckedCreateWithoutCustomerInputObjectSchema } from './CommentUncheckedCreateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateOrConnectWithoutCustomerInput> = z
  .object({
    where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CommentCreateWithoutCustomerInputObjectSchema),
      z.lazy(() => CommentUncheckedCreateWithoutCustomerInputObjectSchema),
    ]),
  })
  .strict();

export const CommentCreateOrConnectWithoutCustomerInputObjectSchema = Schema;
