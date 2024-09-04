import { z } from 'zod';
import { ScheduleWhereUniqueInputObjectSchema } from './ScheduleWhereUniqueInput.schema';
import { ScheduleUpdateWithoutCustomerInputObjectSchema } from './ScheduleUpdateWithoutCustomerInput.schema';
import { ScheduleUncheckedUpdateWithoutCustomerInputObjectSchema } from './ScheduleUncheckedUpdateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleUpdateWithWhereUniqueWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => ScheduleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ScheduleUpdateWithoutCustomerInputObjectSchema),
        z.lazy(() => ScheduleUncheckedUpdateWithoutCustomerInputObjectSchema),
      ]),
    })
    .strict();

export const ScheduleUpdateWithWhereUniqueWithoutCustomerInputObjectSchema =
  Schema;
