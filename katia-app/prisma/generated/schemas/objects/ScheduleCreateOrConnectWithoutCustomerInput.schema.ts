import { z } from 'zod';
import { ScheduleWhereUniqueInputObjectSchema } from './ScheduleWhereUniqueInput.schema';
import { ScheduleCreateWithoutCustomerInputObjectSchema } from './ScheduleCreateWithoutCustomerInput.schema';
import { ScheduleUncheckedCreateWithoutCustomerInputObjectSchema } from './ScheduleUncheckedCreateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleCreateOrConnectWithoutCustomerInput> = z
  .object({
    where: z.lazy(() => ScheduleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ScheduleCreateWithoutCustomerInputObjectSchema),
      z.lazy(() => ScheduleUncheckedCreateWithoutCustomerInputObjectSchema),
    ]),
  })
  .strict();

export const ScheduleCreateOrConnectWithoutCustomerInputObjectSchema = Schema;
