import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutCustomerInputObjectSchema } from './CommentUpdateWithoutCustomerInput.schema';
import { CommentUncheckedUpdateWithoutCustomerInputObjectSchema } from './CommentUncheckedUpdateWithoutCustomerInput.schema';
import { CommentCreateWithoutCustomerInputObjectSchema } from './CommentCreateWithoutCustomerInput.schema';
import { CommentUncheckedCreateWithoutCustomerInputObjectSchema } from './CommentUncheckedCreateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CommentUpdateWithoutCustomerInputObjectSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutCustomerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => CommentCreateWithoutCustomerInputObjectSchema),
        z.lazy(() => CommentUncheckedCreateWithoutCustomerInputObjectSchema),
      ]),
    })
    .strict();

export const CommentUpsertWithWhereUniqueWithoutCustomerInputObjectSchema =
  Schema;
