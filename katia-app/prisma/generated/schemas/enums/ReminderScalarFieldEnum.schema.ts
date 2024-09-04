import { z } from 'zod';

export const ReminderScalarFieldEnumSchema = z.enum([
  'id',
  'comment',
  'date',
  'desmissed',
  'customerId',
  'createdAt',
  'updatedAt',
]);
