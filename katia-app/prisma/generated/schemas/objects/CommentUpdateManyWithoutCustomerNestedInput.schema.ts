import { z } from 'zod';
import { CommentCreateWithoutCustomerInputObjectSchema } from './CommentCreateWithoutCustomerInput.schema';
import { CommentUncheckedCreateWithoutCustomerInputObjectSchema } from './CommentUncheckedCreateWithoutCustomerInput.schema';
import { CommentCreateOrConnectWithoutCustomerInputObjectSchema } from './CommentCreateOrConnectWithoutCustomerInput.schema';
import { CommentUpsertWithWhereUniqueWithoutCustomerInputObjectSchema } from './CommentUpsertWithWhereUniqueWithoutCustomerInput.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithWhereUniqueWithoutCustomerInputObjectSchema } from './CommentUpdateWithWhereUniqueWithoutCustomerInput.schema';
import { CommentUpdateManyWithWhereWithoutCustomerInputObjectSchema } from './CommentUpdateManyWithWhereWithoutCustomerInput.schema';
import { CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateManyWithoutCustomerNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => CommentUpsertWithWhereUniqueWithoutCustomerInputObjectSchema,
        ),
        z
          .lazy(
            () => CommentUpsertWithWhereUniqueWithoutCustomerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => CommentWhereUniqueInputObjectSchema),
        z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => CommentWhereUniqueInputObjectSchema),
        z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => CommentWhereUniqueInputObjectSchema),
        z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => CommentWhereUniqueInputObjectSchema),
        z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => CommentUpdateWithWhereUniqueWithoutCustomerInputObjectSchema,
        ),
        z
          .lazy(
            () => CommentUpdateWithWhereUniqueWithoutCustomerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => CommentUpdateManyWithWhereWithoutCustomerInputObjectSchema,
        ),
        z
          .lazy(
            () => CommentUpdateManyWithWhereWithoutCustomerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => CommentScalarWhereInputObjectSchema),
        z.lazy(() => CommentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const CommentUpdateManyWithoutCustomerNestedInputObjectSchema = Schema;
