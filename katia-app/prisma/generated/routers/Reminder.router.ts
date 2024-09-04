import { t, publicProcedure } from "./helpers/createRouter";
import { ReminderCreateOneSchema } from "../schemas/createOneReminder.schema";
import { ReminderDeleteOneSchema } from "../schemas/deleteOneReminder.schema";
import { ReminderFindFirstSchema } from "../schemas/findFirstReminder.schema";
import { ReminderFindManySchema } from "../schemas/findManyReminder.schema";
import { ReminderFindUniqueSchema } from "../schemas/findUniqueReminder.schema";
import { ReminderUpdateOneSchema } from "../schemas/updateOneReminder.schema";
import { ReminderUpsertSchema } from "../schemas/upsertOneReminder.schema";

export const remindersRouter = t.router({
  createOneReminder: publicProcedure
    .input(ReminderCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneReminder = await ctx.prisma.reminder.create(input);
      return createOneReminder;
    }),
  deleteOneReminder: publicProcedure
    .input(ReminderDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneReminder = await ctx.prisma.reminder.delete(input);
      return deleteOneReminder;
    }),
  findFirstReminder: publicProcedure
    .input(ReminderFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstReminder = await ctx.prisma.reminder.findFirst(input);
      return findFirstReminder;
    }),
  findManyReminder: publicProcedure
    .input(ReminderFindManySchema).query(async ({ ctx, input }) => {
      const findManyReminder = await ctx.prisma.reminder.findMany(input);
      return findManyReminder;
    }),
  findUniqueReminder: publicProcedure
    .input(ReminderFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueReminder = await ctx.prisma.reminder.findUnique(input);
      return findUniqueReminder;
    }),
  updateOneReminder: publicProcedure
    .input(ReminderUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneReminder = await ctx.prisma.reminder.update(input);
      return updateOneReminder;
    }),
  upsertOneReminder: publicProcedure
    .input(ReminderUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneReminder = await ctx.prisma.reminder.upsert(input);
      return upsertOneReminder;
    }),

}) 
