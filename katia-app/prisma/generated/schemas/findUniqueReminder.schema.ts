import { z } from 'zod';
import { ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema';

export const ReminderFindUniqueSchema = z.object({
  where: ReminderWhereUniqueInputObjectSchema,
});
