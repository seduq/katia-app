import { z } from 'zod';
import { ScheduleScalarWhereInputObjectSchema } from './ScheduleScalarWhereInput.schema';
import { ScheduleUpdateManyMutationInputObjectSchema } from './ScheduleUpdateManyMutationInput.schema';
import { ScheduleUncheckedUpdateManyWithoutSchedulesInputObjectSchema } from './ScheduleUncheckedUpdateManyWithoutSchedulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleUpdateManyWithWhereWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => ScheduleScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ScheduleUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ScheduleUncheckedUpdateManyWithoutSchedulesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ScheduleUpdateManyWithWhereWithoutCustomerInputObjectSchema =
  Schema;
