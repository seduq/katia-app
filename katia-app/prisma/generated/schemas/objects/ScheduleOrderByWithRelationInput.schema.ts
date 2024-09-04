import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerOrderByWithRelationInputObjectSchema } from './CustomerOrderByWithRelationInput.schema';
import { EmployeeOrderByWithRelationInputObjectSchema } from './EmployeeOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ScheduleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    time: z.lazy(() => SortOrderSchema).optional(),
    comment: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    customerId: z.lazy(() => SortOrderSchema).optional(),
    employeeId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    customer: z
      .lazy(() => CustomerOrderByWithRelationInputObjectSchema)
      .optional(),
    employee: z
      .lazy(() => EmployeeOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ScheduleOrderByWithRelationInputObjectSchema = Schema;
