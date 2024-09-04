import { z } from 'zod';
import { CustomerCreateInputObjectSchema } from './objects/CustomerCreateInput.schema';
import { CustomerUncheckedCreateInputObjectSchema } from './objects/CustomerUncheckedCreateInput.schema';

export const CustomerCreateOneSchema = z.object({
  data: z.union([
    CustomerCreateInputObjectSchema,
    CustomerUncheckedCreateInputObjectSchema,
  ]),
});
