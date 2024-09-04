import { z } from 'zod';

export const EmployeeScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'createdAt',
  'updatedAt',
]);
