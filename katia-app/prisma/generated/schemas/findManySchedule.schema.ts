import { z } from 'zod';
import { ScheduleOrderByWithRelationInputObjectSchema } from './objects/ScheduleOrderByWithRelationInput.schema';
import { ScheduleWhereInputObjectSchema } from './objects/ScheduleWhereInput.schema';
import { ScheduleWhereUniqueInputObjectSchema } from './objects/ScheduleWhereUniqueInput.schema';
import { ScheduleScalarFieldEnumSchema } from './enums/ScheduleScalarFieldEnum.schema';

export const ScheduleFindManySchema = z.object({
  orderBy: z
    .union([
      ScheduleOrderByWithRelationInputObjectSchema,
      ScheduleOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ScheduleWhereInputObjectSchema.optional(),
  cursor: ScheduleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ScheduleScalarFieldEnumSchema).optional(),
});
