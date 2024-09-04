import { z } from 'zod';
import { CustomerWhereUniqueInputObjectSchema } from './objects/CustomerWhereUniqueInput.schema';
import { CustomerCreateInputObjectSchema } from './objects/CustomerCreateInput.schema';
import { CustomerUncheckedCreateInputObjectSchema } from './objects/CustomerUncheckedCreateInput.schema';
import { CustomerUpdateInputObjectSchema } from './objects/CustomerUpdateInput.schema';
import { CustomerUncheckedUpdateInputObjectSchema } from './objects/CustomerUncheckedUpdateInput.schema';

export const CustomerUpsertSchema = z.object({
  where: CustomerWhereUniqueInputObjectSchema,
  create: z.union([
    CustomerCreateInputObjectSchema,
    CustomerUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CustomerUpdateInputObjectSchema,
    CustomerUncheckedUpdateInputObjectSchema,
  ]),
});
