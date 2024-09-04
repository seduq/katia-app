import { z } from 'zod';
import { ReminderCreateInputObjectSchema } from './objects/ReminderCreateInput.schema';
import { ReminderUncheckedCreateInputObjectSchema } from './objects/ReminderUncheckedCreateInput.schema';

export const ReminderCreateOneSchema = z.object({
  data: z.union([
    ReminderCreateInputObjectSchema,
    ReminderUncheckedCreateInputObjectSchema,
  ]),
});
