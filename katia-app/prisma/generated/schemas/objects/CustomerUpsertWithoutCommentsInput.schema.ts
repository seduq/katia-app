import { z } from 'zod';
import { CustomerUpdateWithoutCommentsInputObjectSchema } from './CustomerUpdateWithoutCommentsInput.schema';
import { CustomerUncheckedUpdateWithoutCommentsInputObjectSchema } from './CustomerUncheckedUpdateWithoutCommentsInput.schema';
import { CustomerCreateWithoutCommentsInputObjectSchema } from './CustomerCreateWithoutCommentsInput.schema';
import { CustomerUncheckedCreateWithoutCommentsInputObjectSchema } from './CustomerUncheckedCreateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUpsertWithoutCommentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => CustomerUpdateWithoutCommentsInputObjectSchema),
      z.lazy(() => CustomerUncheckedUpdateWithoutCommentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CustomerCreateWithoutCommentsInputObjectSchema),
      z.lazy(() => CustomerUncheckedCreateWithoutCommentsInputObjectSchema),
    ]),
  })
  .strict();

export const CustomerUpsertWithoutCommentsInputObjectSchema = Schema;
