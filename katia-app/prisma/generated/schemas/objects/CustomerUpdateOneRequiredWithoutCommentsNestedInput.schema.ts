import { z } from 'zod';
import { CustomerCreateWithoutCommentsInputObjectSchema } from './CustomerCreateWithoutCommentsInput.schema';
import { CustomerUncheckedCreateWithoutCommentsInputObjectSchema } from './CustomerUncheckedCreateWithoutCommentsInput.schema';
import { CustomerCreateOrConnectWithoutCommentsInputObjectSchema } from './CustomerCreateOrConnectWithoutCommentsInput.schema';
import { CustomerUpsertWithoutCommentsInputObjectSchema } from './CustomerUpsertWithoutCommentsInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateWithoutCommentsInputObjectSchema } from './CustomerUpdateWithoutCommentsInput.schema';
import { CustomerUncheckedUpdateWithoutCommentsInputObjectSchema } from './CustomerUncheckedUpdateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutCommentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CustomerCreateWithoutCommentsInputObjectSchema),
          z.lazy(() => CustomerUncheckedCreateWithoutCommentsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CustomerCreateOrConnectWithoutCommentsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => CustomerUpsertWithoutCommentsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CustomerUpdateWithoutCommentsInputObjectSchema),
          z.lazy(() => CustomerUncheckedUpdateWithoutCommentsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const CustomerUpdateOneRequiredWithoutCommentsNestedInputObjectSchema =
  Schema;
