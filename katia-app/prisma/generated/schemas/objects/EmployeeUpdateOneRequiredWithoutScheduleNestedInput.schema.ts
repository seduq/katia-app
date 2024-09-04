import { z } from 'zod';
import { EmployeeCreateWithoutScheduleInputObjectSchema } from './EmployeeCreateWithoutScheduleInput.schema';
import { EmployeeUncheckedCreateWithoutScheduleInputObjectSchema } from './EmployeeUncheckedCreateWithoutScheduleInput.schema';
import { EmployeeCreateOrConnectWithoutScheduleInputObjectSchema } from './EmployeeCreateOrConnectWithoutScheduleInput.schema';
import { EmployeeUpsertWithoutScheduleInputObjectSchema } from './EmployeeUpsertWithoutScheduleInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithoutScheduleInputObjectSchema } from './EmployeeUpdateWithoutScheduleInput.schema';
import { EmployeeUncheckedUpdateWithoutScheduleInputObjectSchema } from './EmployeeUncheckedUpdateWithoutScheduleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpdateOneRequiredWithoutScheduleNestedInput> =
  z
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
      upsert: z
        .lazy(() => EmployeeUpsertWithoutScheduleInputObjectSchema)
        .optional(),
      connect: z.lazy(() => EmployeeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => EmployeeUpdateWithoutScheduleInputObjectSchema),
          z.lazy(() => EmployeeUncheckedUpdateWithoutScheduleInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const EmployeeUpdateOneRequiredWithoutScheduleNestedInputObjectSchema =
  Schema;
