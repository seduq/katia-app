import { z } from 'zod';
import { ScheduleUncheckedCreateNestedManyWithoutEmployeeInputObjectSchema } from './ScheduleUncheckedCreateNestedManyWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Schedule: z
      .lazy(
        () => ScheduleUncheckedCreateNestedManyWithoutEmployeeInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const EmployeeUncheckedCreateInputObjectSchema = Schema;
