import { z } from 'zod';
import { ScheduleCreateWithoutCustomerInputObjectSchema } from './ScheduleCreateWithoutCustomerInput.schema';
import { ScheduleUncheckedCreateWithoutCustomerInputObjectSchema } from './ScheduleUncheckedCreateWithoutCustomerInput.schema';
import { ScheduleCreateOrConnectWithoutCustomerInputObjectSchema } from './ScheduleCreateOrConnectWithoutCustomerInput.schema';
import { ScheduleWhereUniqueInputObjectSchema } from './ScheduleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleUncheckedCreateNestedManyWithoutCustomerInput> =
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
      connect: z
        .union([
          z.lazy(() => ScheduleWhereUniqueInputObjectSchema),
          z.lazy(() => ScheduleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ScheduleUncheckedCreateNestedManyWithoutCustomerInputObjectSchema =
  Schema;
