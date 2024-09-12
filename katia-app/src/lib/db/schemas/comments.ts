import { z } from 'zod';

export const CommentSchema = z.object({
  id: z.string(),
  comment: z.string(),
  customerId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
