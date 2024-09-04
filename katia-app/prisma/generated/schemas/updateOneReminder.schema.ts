import { z } from 'zod';
import { ReminderUpdateInputObjectSchema } from './objects/ReminderUpdateInput.schema';
import { ReminderUncheckedUpdateInputObjectSchema } from './objects/ReminderUncheckedUpdateInput.schema';
import { ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema';

export const ReminderUpdateOneSchema = z.object({
  data: z.union([
    ReminderUpdateInputObjectSchema,
    ReminderUncheckedUpdateInputObjectSchema,
  ]),
  where: ReminderWhereUniqueInputObjectSchema,
});
