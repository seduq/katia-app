import { z } from 'zod';
import { CustomerUpdateInputObjectSchema } from './objects/CustomerUpdateInput.schema';
import { CustomerUncheckedUpdateInputObjectSchema } from './objects/CustomerUncheckedUpdateInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './objects/CustomerWhereUniqueInput.schema';

export const CustomerUpdateOneSchema = z.object({
  data: z.union([
    CustomerUpdateInputObjectSchema,
    CustomerUncheckedUpdateInputObjectSchema,
  ]),
  where: CustomerWhereUniqueInputObjectSchema,
});
