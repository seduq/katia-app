import { z } from 'zod';
import { ScheduleWhereInputObjectSchema } from './objects/ScheduleWhereInput.schema';
import { ScheduleOrderByWithAggregationInputObjectSchema } from './objects/ScheduleOrderByWithAggregationInput.schema';
import { ScheduleScalarWhereWithAggregatesInputObjectSchema } from './objects/ScheduleScalarWhereWithAggregatesInput.schema';
import { ScheduleScalarFieldEnumSchema } from './enums/ScheduleScalarFieldEnum.schema';

export const ScheduleGroupBySchema = z.object({
  where: ScheduleWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ScheduleOrderByWithAggregationInputObjectSchema,
      ScheduleOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ScheduleScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ScheduleScalarFieldEnumSchema),
});
