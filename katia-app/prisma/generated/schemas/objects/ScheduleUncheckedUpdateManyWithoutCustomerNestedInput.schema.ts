import { z } from 'zod';
import { ScheduleCreateWithoutCustomerInputObjectSchema } from './ScheduleCreateWithoutCustomerInput.schema';
import { ScheduleUncheckedCreateWithoutCustomerInputObjectSchema } from './ScheduleUncheckedCreateWithoutCustomerInput.schema';
import { ScheduleCreateOrConnectWithoutCustomerInputObjectSchema } from './ScheduleCreateOrConnectWithoutCustomerInput.schema';
import { ScheduleUpsertWithWhereUniqueWithoutCustomerInputObjectSchema } from './ScheduleUpsertWithWhereUniqueWithoutCustomerInput.schema';
import { ScheduleWhereUniqueInputObjectSchema } from './ScheduleWhereUniqueInput.schema';
import { ScheduleUpdateWithWhereUniqueWithoutCustomerInputObjectSchema } from './ScheduleUpdateWithWhereUniqueWithoutCustomerInput.schema';
import { ScheduleUpdateManyWithWhereWithoutCustomerInputObjectSchema } from './ScheduleUpdateManyWithWhereWithoutCustomerInput.schema';
import { ScheduleScalarWhereInputObjectSchema } from './ScheduleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleUncheckedUpdateManyWithoutCustomerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ScheduleCreateWithoutCustomerInputObjectSchema),
          z.lazy(() => ScheduleCreateWithoutCustomerInputObjectSchema).array(),
          z.lazy(() => ScheduleUncheckedCreateWithoutCustomerInputObjectSchema),
          z
            .lazy(() => ScheduleUncheckedCreateWithoutCustomerInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ScheduleCreateOrConnectWithoutCustomerInputObjectSchema),
          z
            .lazy(() => ScheduleCreateOrConnectWithoutCustomerInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ScheduleUpsertWithWhereUniqueWithoutCustomerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ScheduleUpsertWithWhereUniqueWithoutCustomerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ScheduleWhereUniqueInputObjectSchema),
          z.lazy(() => ScheduleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ScheduleWhereUniqueInputObjectSchema),
          z.lazy(() => ScheduleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ScheduleWhereUniqueInputObjectSchema),
          z.lazy(() => ScheduleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ScheduleWhereUniqueInputObjectSchema),
          z.lazy(() => ScheduleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ScheduleUpdateWithWhereUniqueWithoutCustomerInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ScheduleUpdateWithWhereUniqueWithoutCustomerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ScheduleUpdateManyWithWhereWithoutCustomerInputObjectSchema,
          ),
          z
            .lazy(
              () => ScheduleUpdateManyWithWhereWithoutCustomerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ScheduleScalarWhereInputObjectSchema),
          z.lazy(() => ScheduleScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ScheduleUncheckedUpdateManyWithoutCustomerNestedInputObjectSchema =
  Schema;
