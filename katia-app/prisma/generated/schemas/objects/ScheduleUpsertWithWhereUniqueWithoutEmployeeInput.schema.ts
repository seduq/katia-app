import { z } from 'zod';
import { ScheduleWhereUniqueInputObjectSchema } from './ScheduleWhereUniqueInput.schema';
import { ScheduleUpdateWithoutEmployeeInputObjectSchema } from './ScheduleUpdateWithoutEmployeeInput.schema';
import { ScheduleUncheckedUpdateWithoutEmployeeInputObjectSchema } from './ScheduleUncheckedUpdateWithoutEmployeeInput.schema';
import { ScheduleCreateWithoutEmployeeInputObjectSchema } from './ScheduleCreateWithoutEmployeeInput.schema';
import { ScheduleUncheckedCreateWithoutEmployeeInputObjectSchema } from './ScheduleUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleUpsertWithWhereUniqueWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => ScheduleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ScheduleUpdateWithoutEmployeeInputObjectSchema),
        z.lazy(() => ScheduleUncheckedUpdateWithoutEmployeeInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ScheduleCreateWithoutEmployeeInputObjectSchema),
        z.lazy(() => ScheduleUncheckedCreateWithoutEmployeeInputObjectSchema),
      ]),
    })
    .strict();

export const ScheduleUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema =
  Schema;
