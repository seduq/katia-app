import { z } from 'zod';
import { EmployeeUpdateWithoutScheduleInputObjectSchema } from './EmployeeUpdateWithoutScheduleInput.schema';
import { EmployeeUncheckedUpdateWithoutScheduleInputObjectSchema } from './EmployeeUncheckedUpdateWithoutScheduleInput.schema';
import { EmployeeCreateWithoutScheduleInputObjectSchema } from './EmployeeCreateWithoutScheduleInput.schema';
import { EmployeeUncheckedCreateWithoutScheduleInputObjectSchema } from './EmployeeUncheckedCreateWithoutScheduleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpsertWithoutScheduleInput> = z
  .object({
    update: z.union([
      z.lazy(() => EmployeeUpdateWithoutScheduleInputObjectSchema),
      z.lazy(() => EmployeeUncheckedUpdateWithoutScheduleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EmployeeCreateWithoutScheduleInputObjectSchema),
      z.lazy(() => EmployeeUncheckedCreateWithoutScheduleInputObjectSchema),
    ]),
  })
  .strict();

export const EmployeeUpsertWithoutScheduleInputObjectSchema = Schema;
