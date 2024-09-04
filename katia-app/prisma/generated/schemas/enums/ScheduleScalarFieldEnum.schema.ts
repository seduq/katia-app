import { z } from 'zod';

export const ScheduleScalarFieldEnumSchema = z.enum([
  'id',
  'time',
  'comment',
  'price',
  'customerId',
  'employeeId',
  'createdAt',
  'updatedAt',
]);
