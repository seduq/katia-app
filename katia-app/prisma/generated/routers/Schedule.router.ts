import { t, publicProcedure } from "./helpers/createRouter";
import { ScheduleCreateOneSchema } from "../schemas/createOneSchedule.schema";
import { ScheduleDeleteOneSchema } from "../schemas/deleteOneSchedule.schema";
import { ScheduleFindFirstSchema } from "../schemas/findFirstSchedule.schema";
import { ScheduleFindManySchema } from "../schemas/findManySchedule.schema";
import { ScheduleFindUniqueSchema } from "../schemas/findUniqueSchedule.schema";
import { ScheduleUpdateOneSchema } from "../schemas/updateOneSchedule.schema";
import { ScheduleUpsertSchema } from "../schemas/upsertOneSchedule.schema";

export const schedulesRouter = t.router({
  createOneSchedule: publicProcedure
    .input(ScheduleCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneSchedule = await ctx.prisma.schedule.create(input);
      return createOneSchedule;
    }),
  deleteOneSchedule: publicProcedure
    .input(ScheduleDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneSchedule = await ctx.prisma.schedule.delete(input);
      return deleteOneSchedule;
    }),
  findFirstSchedule: publicProcedure
    .input(ScheduleFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSchedule = await ctx.prisma.schedule.findFirst(input);
      return findFirstSchedule;
    }),
  findManySchedule: publicProcedure
    .input(ScheduleFindManySchema).query(async ({ ctx, input }) => {
      const findManySchedule = await ctx.prisma.schedule.findMany(input);
      return findManySchedule;
    }),
  findUniqueSchedule: publicProcedure
    .input(ScheduleFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSchedule = await ctx.prisma.schedule.findUnique(input);
      return findUniqueSchedule;
    }),
  updateOneSchedule: publicProcedure
    .input(ScheduleUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneSchedule = await ctx.prisma.schedule.update(input);
      return updateOneSchedule;
    }),
  upsertOneSchedule: publicProcedure
    .input(ScheduleUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneSchedule = await ctx.prisma.schedule.upsert(input);
      return upsertOneSchedule;
    }),

}) 
