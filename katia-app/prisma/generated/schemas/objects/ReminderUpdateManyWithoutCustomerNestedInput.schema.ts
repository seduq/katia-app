import { z } from 'zod';
import { ReminderCreateWithoutCustomerInputObjectSchema } from './ReminderCreateWithoutCustomerInput.schema';
import { ReminderUncheckedCreateWithoutCustomerInputObjectSchema } from './ReminderUncheckedCreateWithoutCustomerInput.schema';
import { ReminderCreateOrConnectWithoutCustomerInputObjectSchema } from './ReminderCreateOrConnectWithoutCustomerInput.schema';
import { ReminderUpsertWithWhereUniqueWithoutCustomerInputObjectSchema } from './ReminderUpsertWithWhereUniqueWithoutCustomerInput.schema';
import { ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema';
import { ReminderUpdateWithWhereUniqueWithoutCustomerInputObjectSchema } from './ReminderUpdateWithWhereUniqueWithoutCustomerInput.schema';
import { ReminderUpdateManyWithWhereWithoutCustomerInputObjectSchema } from './ReminderUpdateManyWithWhereWithoutCustomerInput.schema';
import { ReminderScalarWhereInputObjectSchema } from './ReminderScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReminderUpdateManyWithoutCustomerNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ReminderUpsertWithWhereUniqueWithoutCustomerInputObjectSchema,
        ),
        z
          .lazy(
            () => ReminderUpsertWithWhereUniqueWithoutCustomerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ReminderWhereUniqueInputObjectSchema),
        z.lazy(() => ReminderWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ReminderWhereUniqueInputObjectSchema),
        z.lazy(() => ReminderWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ReminderWhereUniqueInputObjectSchema),
        z.lazy(() => ReminderWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ReminderWhereUniqueInputObjectSchema),
        z.lazy(() => ReminderWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ReminderUpdateWithWhereUniqueWithoutCustomerInputObjectSchema,
        ),
        z
          .lazy(
            () => ReminderUpdateWithWhereUniqueWithoutCustomerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ReminderUpdateManyWithWhereWithoutCustomerInputObjectSchema,
        ),
        z
          .lazy(
            () => ReminderUpdateManyWithWhereWithoutCustomerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ReminderScalarWhereInputObjectSchema),
        z.lazy(() => ReminderScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReminderUpdateManyWithoutCustomerNestedInputObjectSchema = Schema;
