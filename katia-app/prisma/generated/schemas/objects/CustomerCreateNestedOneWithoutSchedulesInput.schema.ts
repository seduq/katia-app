import { z } from 'zod';
import { CustomerCreateWithoutSchedulesInputObjectSchema } from './CustomerCreateWithoutSchedulesInput.schema';
import { CustomerUncheckedCreateWithoutSchedulesInputObjectSchema } from './CustomerUncheckedCreateWithoutSchedulesInput.schema';
import { CustomerCreateOrConnectWithoutSchedulesInputObjectSchema } from './CustomerCreateOrConnectWithoutSchedulesInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutSchedulesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CustomerCreateWithoutSchedulesInputObjectSchema),
        z.lazy(() => CustomerUncheckedCreateWithoutSchedulesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CustomerCreateOrConnectWithoutSchedulesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CustomerCreateNestedOneWithoutSchedulesInputObjectSchema = Schema;
