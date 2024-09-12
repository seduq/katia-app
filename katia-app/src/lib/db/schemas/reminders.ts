import { z } from 'zod';

export const ReminderSchema = z.object({
  id: z.string(),
  comment: z.string(),
  date: z.string(),
  dismissed: z.string(),
  customerId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
