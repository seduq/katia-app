import { z } from 'zod';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutSchedulesInputObjectSchema } from './CustomerCreateWithoutSchedulesInput.schema';
import { CustomerUncheckedCreateWithoutSchedulesInputObjectSchema } from './CustomerUncheckedCreateWithoutSchedulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutSchedulesInput> = z
  .object({
    where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CustomerCreateWithoutSchedulesInputObjectSchema),
      z.lazy(() => CustomerUncheckedCreateWithoutSchedulesInputObjectSchema),
    ]),
  })
  .strict();

export const CustomerCreateOrConnectWithoutSchedulesInputObjectSchema = Schema;
