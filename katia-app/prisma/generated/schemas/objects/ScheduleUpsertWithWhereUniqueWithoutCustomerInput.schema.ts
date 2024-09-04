import { z } from 'zod';
import { ScheduleWhereUniqueInputObjectSchema } from './ScheduleWhereUniqueInput.schema';
import { ScheduleUpdateWithoutCustomerInputObjectSchema } from './ScheduleUpdateWithoutCustomerInput.schema';
import { ScheduleUncheckedUpdateWithoutCustomerInputObjectSchema } from './ScheduleUncheckedUpdateWithoutCustomerInput.schema';
import { ScheduleCreateWithoutCustomerInputObjectSchema } from './ScheduleCreateWithoutCustomerInput.schema';
import { ScheduleUncheckedCreateWithoutCustomerInputObjectSchema } from './ScheduleUncheckedCreateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleUpsertWithWhereUniqueWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => ScheduleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ScheduleUpdateWithoutCustomerInputObjectSchema),
        z.lazy(() => ScheduleUncheckedUpdateWithoutCustomerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ScheduleCreateWithoutCustomerInputObjectSchema),
        z.lazy(() => ScheduleUncheckedCreateWithoutCustomerInputObjectSchema),
      ]),
    })
    .strict();

export const ScheduleUpsertWithWhereUniqueWithoutCustomerInputObjectSchema =
  Schema;
