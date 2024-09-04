import { z } from 'zod';

export const CustomerScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'phone',
  'createdAt',
  'updatedAt',
]);
