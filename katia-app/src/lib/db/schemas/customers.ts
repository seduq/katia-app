import { z } from 'zod';

export const CustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
