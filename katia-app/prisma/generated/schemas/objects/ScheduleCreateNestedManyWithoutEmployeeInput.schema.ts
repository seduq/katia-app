import { z } from 'zod';
import { ScheduleCreateWithoutEmployeeInputObjectSchema } from './ScheduleCreateWithoutEmployeeInput.schema';
import { ScheduleUncheckedCreateWithoutEmployeeInputObjectSchema } from './ScheduleUncheckedCreateWithoutEmployeeInput.schema';
import { ScheduleCreateOrConnectWithoutEmployeeInputObjectSchema } from './ScheduleCreateOrConnectWithoutEmployeeInput.schema';
import { ScheduleWhereUniqueInputObjectSchema } from './ScheduleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleCreateNestedManyWithoutEmployeeInput> = z
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
    connect: z
      .union([
        z.lazy(() => ScheduleWhereUniqueInputObjectSchema),
        z.lazy(() => ScheduleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ScheduleCreateNestedManyWithoutEmployeeInputObjectSchema = Schema;
