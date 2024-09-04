import { z } from 'zod';

export const CommentScalarFieldEnumSchema = z.enum([
  'id',
  'comment',
  'customerId',
  'createdAt',
  'updatedAt',
]);
