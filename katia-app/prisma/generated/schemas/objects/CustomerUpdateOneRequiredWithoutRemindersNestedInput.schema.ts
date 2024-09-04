import { z } from 'zod';
import { CustomerCreateWithoutRemindersInputObjectSchema } from './CustomerCreateWithoutRemindersInput.schema';
import { CustomerUncheckedCreateWithoutRemindersInputObjectSchema } from './CustomerUncheckedCreateWithoutRemindersInput.schema';
import { CustomerCreateOrConnectWithoutRemindersInputObjectSchema } from './CustomerCreateOrConnectWithoutRemindersInput.schema';
import { CustomerUpsertWithoutRemindersInputObjectSchema } from './CustomerUpsertWithoutRemindersInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateWithoutRemindersInputObjectSchema } from './CustomerUpdateWithoutRemindersInput.schema';
import { CustomerUncheckedUpdateWithoutRemindersInputObjectSchema } from './CustomerUncheckedUpdateWithoutRemindersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutRemindersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CustomerCreateWithoutRemindersInputObjectSchema),
          z.lazy(
            () => CustomerUncheckedCreateWithoutRemindersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CustomerCreateOrConnectWithoutRemindersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => CustomerUpsertWithoutRemindersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CustomerUpdateWithoutRemindersInputObjectSchema),
          z.lazy(
            () => CustomerUncheckedUpdateWithoutRemindersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const CustomerUpdateOneRequiredWithoutRemindersNestedInputObjectSchema =
  Schema;
