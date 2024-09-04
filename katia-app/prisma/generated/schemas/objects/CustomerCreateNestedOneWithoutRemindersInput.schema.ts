import { z } from 'zod';
import { CustomerCreateWithoutRemindersInputObjectSchema } from './CustomerCreateWithoutRemindersInput.schema';
import { CustomerUncheckedCreateWithoutRemindersInputObjectSchema } from './CustomerUncheckedCreateWithoutRemindersInput.schema';
import { CustomerCreateOrConnectWithoutRemindersInputObjectSchema } from './CustomerCreateOrConnectWithoutRemindersInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutRemindersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CustomerCreateWithoutRemindersInputObjectSchema),
        z.lazy(() => CustomerUncheckedCreateWithoutRemindersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CustomerCreateOrConnectWithoutRemindersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CustomerCreateNestedOneWithoutRemindersInputObjectSchema = Schema;
