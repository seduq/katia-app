import { z } from 'zod';
import { ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema';

export const ReminderDeleteOneSchema = z.object({
  where: ReminderWhereUniqueInputObjectSchema,
});
