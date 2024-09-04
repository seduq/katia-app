import { z } from 'zod';
import { ScheduleWhereUniqueInputObjectSchema } from './ScheduleWhereUniqueInput.schema';
import { ScheduleUpdateWithoutEmployeeInputObjectSchema } from './ScheduleUpdateWithoutEmployeeInput.schema';
import { ScheduleUncheckedUpdateWithoutEmployeeInputObjectSchema } from './ScheduleUncheckedUpdateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleUpdateWithWhereUniqueWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => ScheduleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ScheduleUpdateWithoutEmployeeInputObjectSchema),
        z.lazy(() => ScheduleUncheckedUpdateWithoutEmployeeInputObjectSchema),
      ]),
    })
    .strict();

export const ScheduleUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema =
  Schema;
