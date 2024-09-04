import { z } from 'zod';
import { ScheduleCreateWithoutEmployeeInputObjectSchema } from './ScheduleCreateWithoutEmployeeInput.schema';
import { ScheduleUncheckedCreateWithoutEmployeeInputObjectSchema } from './ScheduleUncheckedCreateWithoutEmployeeInput.schema';
import { ScheduleCreateOrConnectWithoutEmployeeInputObjectSchema } from './ScheduleCreateOrConnectWithoutEmployeeInput.schema';
import { ScheduleUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema } from './ScheduleUpsertWithWhereUniqueWithoutEmployeeInput.schema';
import { ScheduleWhereUniqueInputObjectSchema } from './ScheduleWhereUniqueInput.schema';
import { ScheduleUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema } from './ScheduleUpdateWithWhereUniqueWithoutEmployeeInput.schema';
import { ScheduleUpdateManyWithWhereWithoutEmployeeInputObjectSchema } from './ScheduleUpdateManyWithWhereWithoutEmployeeInput.schema';
import { ScheduleScalarWhereInputObjectSchema } from './ScheduleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleUpdateManyWithoutEmployeeNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ScheduleCreateWithoutEmployeeInputObjectSchema),
        z.lazy(() => ScheduleCreateWithoutEmployeeInputObjectSchema).array(),
        z.lazy(() => ScheduleUncheckedCreateWithoutEmployeeInputObjectSchema),
        z
          .lazy(() => ScheduleUncheckedCreateWithoutEmployeeInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ScheduleCreateOrConnectWithoutEmployeeInputObjectSchema),
        z
          .lazy(() => ScheduleCreateOrConnectWithoutEmployeeInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ScheduleUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema,
        ),
        z
          .lazy(
            () => ScheduleUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema,
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
          () => ScheduleUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema,
        ),
        z
          .lazy(
            () => ScheduleUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ScheduleUpdateManyWithWhereWithoutEmployeeInputObjectSchema,
        ),
        z
          .lazy(
            () => ScheduleUpdateManyWithWhereWithoutEmployeeInputObjectSchema,
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

export const ScheduleUpdateManyWithoutEmployeeNestedInputObjectSchema = Schema;
