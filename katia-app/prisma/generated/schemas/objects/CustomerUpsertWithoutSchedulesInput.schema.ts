import { z } from 'zod';
import { CustomerUpdateWithoutSchedulesInputObjectSchema } from './CustomerUpdateWithoutSchedulesInput.schema';
import { CustomerUncheckedUpdateWithoutSchedulesInputObjectSchema } from './CustomerUncheckedUpdateWithoutSchedulesInput.schema';
import { CustomerCreateWithoutSchedulesInputObjectSchema } from './CustomerCreateWithoutSchedulesInput.schema';
import { CustomerUncheckedCreateWithoutSchedulesInputObjectSchema } from './CustomerUncheckedCreateWithoutSchedulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUpsertWithoutSchedulesInput> = z
  .object({
    update: z.union([
      z.lazy(() => CustomerUpdateWithoutSchedulesInputObjectSchema),
      z.lazy(() => CustomerUncheckedUpdateWithoutSchedulesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CustomerCreateWithoutSchedulesInputObjectSchema),
      z.lazy(() => CustomerUncheckedCreateWithoutSchedulesInputObjectSchema),
    ]),
  })
  .strict();

export const CustomerUpsertWithoutSchedulesInputObjectSchema = Schema;
