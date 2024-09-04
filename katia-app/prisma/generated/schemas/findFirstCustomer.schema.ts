import { z } from 'zod';
import { CustomerOrderByWithRelationInputObjectSchema } from './objects/CustomerOrderByWithRelationInput.schema';
import { CustomerWhereInputObjectSchema } from './objects/CustomerWhereInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './objects/CustomerWhereUniqueInput.schema';
import { CustomerScalarFieldEnumSchema } from './enums/CustomerScalarFieldEnum.schema';

export const CustomerFindFirstSchema = z.object({
  orderBy: z
    .union([
      CustomerOrderByWithRelationInputObjectSchema,
      CustomerOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CustomerWhereInputObjectSchema.optional(),
  cursor: CustomerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CustomerScalarFieldEnumSchema).optional(),
});
