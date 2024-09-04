import { z } from 'zod';
import { CustomerCreateWithoutSchedulesInputObjectSchema } from './CustomerCreateWithoutSchedulesInput.schema';
import { CustomerUncheckedCreateWithoutSchedulesInputObjectSchema } from './CustomerUncheckedCreateWithoutSchedulesInput.schema';
import { CustomerCreateOrConnectWithoutSchedulesInputObjectSchema } from './CustomerCreateOrConnectWithoutSchedulesInput.schema';
import { CustomerUpsertWithoutSchedulesInputObjectSchema } from './CustomerUpsertWithoutSchedulesInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateWithoutSchedulesInputObjectSchema } from './CustomerUpdateWithoutSchedulesInput.schema';
import { CustomerUncheckedUpdateWithoutSchedulesInputObjectSchema } from './CustomerUncheckedUpdateWithoutSchedulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutSchedulesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CustomerCreateWithoutSchedulesInputObjectSchema),
          z.lazy(
            () => CustomerUncheckedCreateWithoutSchedulesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CustomerCreateOrConnectWithoutSchedulesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => CustomerUpsertWithoutSchedulesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CustomerUpdateWithoutSchedulesInputObjectSchema),
          z.lazy(
            () => CustomerUncheckedUpdateWithoutSchedulesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const CustomerUpdateOneRequiredWithoutSchedulesNestedInputObjectSchema =
  Schema;
