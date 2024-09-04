import { z } from 'zod';
import { ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema';
import { ReminderUpdateWithoutCustomerInputObjectSchema } from './ReminderUpdateWithoutCustomerInput.schema';
import { ReminderUncheckedUpdateWithoutCustomerInputObjectSchema } from './ReminderUncheckedUpdateWithoutCustomerInput.schema';
import { ReminderCreateWithoutCustomerInputObjectSchema } from './ReminderCreateWithoutCustomerInput.schema';
import { ReminderUncheckedCreateWithoutCustomerInputObjectSchema } from './ReminderUncheckedCreateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReminderUpsertWithWhereUniqueWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => ReminderWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ReminderUpdateWithoutCustomerInputObjectSchema),
        z.lazy(() => ReminderUncheckedUpdateWithoutCustomerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ReminderCreateWithoutCustomerInputObjectSchema),
        z.lazy(() => ReminderUncheckedCreateWithoutCustomerInputObjectSchema),
      ]),
    })
    .strict();

export const ReminderUpsertWithWhereUniqueWithoutCustomerInputObjectSchema =
  Schema;
