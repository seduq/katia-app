import { z } from 'zod';
import { ScheduleWhereUniqueInputObjectSchema } from './ScheduleWhereUniqueInput.schema';
import { ScheduleCreateWithoutEmployeeInputObjectSchema } from './ScheduleCreateWithoutEmployeeInput.schema';
import { ScheduleUncheckedCreateWithoutEmployeeInputObjectSchema } from './ScheduleUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleCreateOrConnectWithoutEmployeeInput> = z
  .object({
    where: z.lazy(() => ScheduleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ScheduleCreateWithoutEmployeeInputObjectSchema),
      z.lazy(() => ScheduleUncheckedCreateWithoutEmployeeInputObjectSchema),
    ]),
  })
  .strict();

export const ScheduleCreateOrConnectWithoutEmployeeInputObjectSchema = Schema;
