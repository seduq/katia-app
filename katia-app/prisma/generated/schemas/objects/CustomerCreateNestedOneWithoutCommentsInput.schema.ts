import { z } from 'zod';
import { CustomerCreateWithoutCommentsInputObjectSchema } from './CustomerCreateWithoutCommentsInput.schema';
import { CustomerUncheckedCreateWithoutCommentsInputObjectSchema } from './CustomerUncheckedCreateWithoutCommentsInput.schema';
import { CustomerCreateOrConnectWithoutCommentsInputObjectSchema } from './CustomerCreateOrConnectWithoutCommentsInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutCommentsInput> = z
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
    connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CustomerCreateNestedOneWithoutCommentsInputObjectSchema = Schema;
