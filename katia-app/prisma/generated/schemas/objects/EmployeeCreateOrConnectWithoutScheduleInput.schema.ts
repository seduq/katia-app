import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeCreateWithoutScheduleInputObjectSchema } from './EmployeeCreateWithoutScheduleInput.schema';
import { EmployeeUncheckedCreateWithoutScheduleInputObjectSchema } from './EmployeeUncheckedCreateWithoutScheduleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateOrConnectWithoutScheduleInput> = z
  .object({
    where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EmployeeCreateWithoutScheduleInputObjectSchema),
      z.lazy(() => EmployeeUncheckedCreateWithoutScheduleInputObjectSchema),
    ]),
  })
  .strict();

export const EmployeeCreateOrConnectWithoutScheduleInputObjectSchema = Schema;
