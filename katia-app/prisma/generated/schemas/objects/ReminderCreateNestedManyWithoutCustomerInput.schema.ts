import { z } from 'zod';
import { ReminderCreateWithoutCustomerInputObjectSchema } from './ReminderCreateWithoutCustomerInput.schema';
import { ReminderUncheckedCreateWithoutCustomerInputObjectSchema } from './ReminderUncheckedCreateWithoutCustomerInput.schema';
import { ReminderCreateOrConnectWithoutCustomerInputObjectSchema } from './ReminderCreateOrConnectWithoutCustomerInput.schema';
import { ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReminderCreateNestedManyWithoutCustomerInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ReminderCreateWithoutCustomerInputObjectSchema),
        z.lazy(() => ReminderCreateWithoutCustomerInputObjectSchema).array(),
        z.lazy(() => ReminderUncheckedCreateWithoutCustomerInputObjectSchema),
        z
          .lazy(() => ReminderUncheckedCreateWithoutCustomerInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ReminderCreateOrConnectWithoutCustomerInputObjectSchema),
        z
          .lazy(() => ReminderCreateOrConnectWithoutCustomerInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ReminderWhereUniqueInputObjectSchema),
        z.lazy(() => ReminderWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReminderCreateNestedManyWithoutCustomerInputObjectSchema = Schema;
