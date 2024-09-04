import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutCustomerInputObjectSchema } from './CommentUpdateWithoutCustomerInput.schema';
import { CommentUncheckedUpdateWithoutCustomerInputObjectSchema } from './CommentUncheckedUpdateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CommentUpdateWithoutCustomerInputObjectSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutCustomerInputObjectSchema),
      ]),
    })
    .strict();

export const CommentUpdateWithWhereUniqueWithoutCustomerInputObjectSchema =
  Schema;
