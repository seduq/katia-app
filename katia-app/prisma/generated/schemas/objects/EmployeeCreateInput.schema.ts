import { z } from 'zod';
import { ScheduleCreateNestedManyWithoutEmployeeInputObjectSchema } from './ScheduleCreateNestedManyWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Schedule: z
      .lazy(() => ScheduleCreateNestedManyWithoutEmployeeInputObjectSchema)
      .optional(),
  })
  .strict();

export const EmployeeCreateInputObjectSchema = Schema;
