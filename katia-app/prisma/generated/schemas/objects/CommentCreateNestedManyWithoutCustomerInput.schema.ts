import { z } from 'zod';
import { CommentCreateWithoutCustomerInputObjectSchema } from './CommentCreateWithoutCustomerInput.schema';
import { CommentUncheckedCreateWithoutCustomerInputObjectSchema } from './CommentUncheckedCreateWithoutCustomerInput.schema';
import { CommentCreateOrConnectWithoutCustomerInputObjectSchema } from './CommentCreateOrConnectWithoutCustomerInput.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateNestedManyWithoutCustomerInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CommentCreateWithoutCustomerInputObjectSchema),
        z.lazy(() => CommentCreateWithoutCustomerInputObjectSchema).array(),
        z.lazy(() => CommentUncheckedCreateWithoutCustomerInputObjectSchema),
        z
          .lazy(() => CommentUncheckedCreateWithoutCustomerInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => CommentCreateOrConnectWithoutCustomerInputObjectSchema),
        z
          .lazy(() => CommentCreateOrConnectWithoutCustomerInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => CommentWhereUniqueInputObjectSchema),
        z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const CommentCreateNestedManyWithoutCustomerInputObjectSchema = Schema;
