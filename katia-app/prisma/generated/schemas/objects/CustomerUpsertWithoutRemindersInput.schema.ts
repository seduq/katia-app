import { z } from 'zod';
import { CustomerUpdateWithoutRemindersInputObjectSchema } from './CustomerUpdateWithoutRemindersInput.schema';
import { CustomerUncheckedUpdateWithoutRemindersInputObjectSchema } from './CustomerUncheckedUpdateWithoutRemindersInput.schema';
import { CustomerCreateWithoutRemindersInputObjectSchema } from './CustomerCreateWithoutRemindersInput.schema';
import { CustomerUncheckedCreateWithoutRemindersInputObjectSchema } from './CustomerUncheckedCreateWithoutRemindersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUpsertWithoutRemindersInput> = z
  .object({
    update: z.union([
      z.lazy(() => CustomerUpdateWithoutRemindersInputObjectSchema),
      z.lazy(() => CustomerUncheckedUpdateWithoutRemindersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CustomerCreateWithoutRemindersInputObjectSchema),
      z.lazy(() => CustomerUncheckedCreateWithoutRemindersInputObjectSchema),
    ]),
  })
  .strict();

export const CustomerUpsertWithoutRemindersInputObjectSchema = Schema;
