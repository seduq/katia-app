import { Customer } from '@prisma/client';
import { z } from 'zod';
import { ICompleteSchedule, LazySchedule } from './schedules';

const minTelefone = 5;
const maxTelefone = 4 + 5 + 4;

export const SchemaCustomer = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string()
    .min(minTelefone, {
      message: "Telefone deve ser no formato (xx)xxxxxxxxx",
    })
    .max(maxTelefone, {
      message: "Telefone deve ser no formato (xx)xxxxxxxxx",
    })
    .regex(/\(\d{2}\)[\d]{8,9}/, {
      message: "Telefone deve ser no formato (xx)xxxxxxxxx",
    }),
  createdAt: z.date(),
  updatedAt: z.date(),
}) satisfies z.ZodType<Customer>;

export interface ICompleteCustomer extends Customer {
  schedules: ICompleteSchedule[]
}

export const LazyCustomer: z.ZodSchema<ICompleteCustomer> = z.lazy(() => SchemaCustomer.extend({
  schedules: LazySchedule.array(),
}))
