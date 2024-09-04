import { z } from 'zod';
import { ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema';
import { ReminderUpdateWithoutCustomerInputObjectSchema } from './ReminderUpdateWithoutCustomerInput.schema';
import { ReminderUncheckedUpdateWithoutCustomerInputObjectSchema } from './ReminderUncheckedUpdateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReminderUpdateWithWhereUniqueWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => ReminderWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ReminderUpdateWithoutCustomerInputObjectSchema),
        z.lazy(() => ReminderUncheckedUpdateWithoutCustomerInputObjectSchema),
      ]),
    })
    .strict();

export const ReminderUpdateWithWhereUniqueWithoutCustomerInputObjectSchema =
  Schema;
