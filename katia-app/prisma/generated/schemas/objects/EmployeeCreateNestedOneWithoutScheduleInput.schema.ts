import { z } from 'zod';
import { EmployeeCreateWithoutScheduleInputObjectSchema } from './EmployeeCreateWithoutScheduleInput.schema';
import { EmployeeUncheckedCreateWithoutScheduleInputObjectSchema } from './EmployeeUncheckedCreateWithoutScheduleInput.schema';
import { EmployeeCreateOrConnectWithoutScheduleInputObjectSchema } from './EmployeeCreateOrConnectWithoutScheduleInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateNestedOneWithoutScheduleInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EmployeeCreateWithoutScheduleInputObjectSchema),
        z.lazy(() => EmployeeUncheckedCreateWithoutScheduleInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => EmployeeCreateOrConnectWithoutScheduleInputObjectSchema)
      .optional(),
    connect: z.lazy(() => EmployeeWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const EmployeeCreateNestedOneWithoutScheduleInputObjectSchema = Schema;
