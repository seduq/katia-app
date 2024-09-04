import { z } from 'zod';
import { ScheduleScalarWhereInputObjectSchema } from './ScheduleScalarWhereInput.schema';
import { ScheduleUpdateManyMutationInputObjectSchema } from './ScheduleUpdateManyMutationInput.schema';
import { ScheduleUncheckedUpdateManyWithoutScheduleInputObjectSchema } from './ScheduleUncheckedUpdateManyWithoutScheduleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleUpdateManyWithWhereWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => ScheduleScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ScheduleUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ScheduleUncheckedUpdateManyWithoutScheduleInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ScheduleUpdateManyWithWhereWithoutEmployeeInputObjectSchema =
  Schema;
