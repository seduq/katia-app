import { z } from 'zod';
import { ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema';
import { ReminderCreateInputObjectSchema } from './objects/ReminderCreateInput.schema';
import { ReminderUncheckedCreateInputObjectSchema } from './objects/ReminderUncheckedCreateInput.schema';
import { ReminderUpdateInputObjectSchema } from './objects/ReminderUpdateInput.schema';
import { ReminderUncheckedUpdateInputObjectSchema } from './objects/ReminderUncheckedUpdateInput.schema';

export const ReminderUpsertSchema = z.object({
  where: ReminderWhereUniqueInputObjectSchema,
  create: z.union([
    ReminderCreateInputObjectSchema,
    ReminderUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ReminderUpdateInputObjectSchema,
    ReminderUncheckedUpdateInputObjectSchema,
  ]),
});
