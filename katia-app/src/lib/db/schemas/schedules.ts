import { z } from 'zod';

export const ScheduleScalarFieldEnumSchema = z.object({
  id: z.string(),
  time: z.string(),
  comment: z.string(),
  price: z.string(),
  customerId: z.string(),
  employeeId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
