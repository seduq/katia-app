import { z } from 'zod';
import { CustomerOrderByWithRelationInputObjectSchema } from './objects/CustomerOrderByWithRelationInput.schema';
import { CustomerWhereInputObjectSchema } from './objects/CustomerWhereInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './objects/CustomerWhereUniqueInput.schema';
import { CustomerCountAggregateInputObjectSchema } from './objects/CustomerCountAggregateInput.schema';
import { CustomerMinAggregateInputObjectSchema } from './objects/CustomerMinAggregateInput.schema';
import { CustomerMaxAggregateInputObjectSchema } from './objects/CustomerMaxAggregateInput.schema';

export const CustomerAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), CustomerCountAggregateInputObjectSchema])
    .optional(),
  _min: CustomerMinAggregateInputObjectSchema.optional(),
  _max: CustomerMaxAggregateInputObjectSchema.optional(),
});
