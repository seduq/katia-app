import { z } from 'zod';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutRemindersInputObjectSchema } from './CustomerCreateWithoutRemindersInput.schema';
import { CustomerUncheckedCreateWithoutRemindersInputObjectSchema } from './CustomerUncheckedCreateWithoutRemindersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutRemindersInput> = z
  .object({
    where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CustomerCreateWithoutRemindersInputObjectSchema),
      z.lazy(() => CustomerUncheckedCreateWithoutRemindersInputObjectSchema),
    ]),
  })
  .strict();

export const CustomerCreateOrConnectWithoutRemindersInputObjectSchema = Schema;
