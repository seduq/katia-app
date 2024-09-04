import { z } from 'zod';
import { ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema';
import { ReminderCreateWithoutCustomerInputObjectSchema } from './ReminderCreateWithoutCustomerInput.schema';
import { ReminderUncheckedCreateWithoutCustomerInputObjectSchema } from './ReminderUncheckedCreateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReminderCreateOrConnectWithoutCustomerInput> = z
  .object({
    where: z.lazy(() => ReminderWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReminderCreateWithoutCustomerInputObjectSchema),
      z.lazy(() => ReminderUncheckedCreateWithoutCustomerInputObjectSchema),
    ]),
  })
  .strict();

export const ReminderCreateOrConnectWithoutCustomerInputObjectSchema = Schema;
