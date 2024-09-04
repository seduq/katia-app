import { z } from 'zod';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutCommentsInputObjectSchema } from './CustomerCreateWithoutCommentsInput.schema';
import { CustomerUncheckedCreateWithoutCommentsInputObjectSchema } from './CustomerUncheckedCreateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutCommentsInput> = z
  .object({
    where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CustomerCreateWithoutCommentsInputObjectSchema),
      z.lazy(() => CustomerUncheckedCreateWithoutCommentsInputObjectSchema),
    ]),
  })
  .strict();

export const CustomerCreateOrConnectWithoutCommentsInputObjectSchema = Schema;
