import { t, publicProcedure } from "./helpers/createRouter";
import { CustomerCreateOneSchema } from "../schemas/createOneCustomer.schema";
import { CustomerDeleteOneSchema } from "../schemas/deleteOneCustomer.schema";
import { CustomerFindFirstSchema } from "../schemas/findFirstCustomer.schema";
import { CustomerFindManySchema } from "../schemas/findManyCustomer.schema";
import { CustomerFindUniqueSchema } from "../schemas/findUniqueCustomer.schema";
import { CustomerUpdateOneSchema } from "../schemas/updateOneCustomer.schema";
import { CustomerUpsertSchema } from "../schemas/upsertOneCustomer.schema";

export const customersRouter = t.router({
  createOneCustomer: publicProcedure
    .input(CustomerCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneCustomer = await ctx.prisma.customer.create(input);
      return createOneCustomer;
    }),
  deleteOneCustomer: publicProcedure
    .input(CustomerDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneCustomer = await ctx.prisma.customer.delete(input);
      return deleteOneCustomer;
    }),
  findFirstCustomer: publicProcedure
    .input(CustomerFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstCustomer = await ctx.prisma.customer.findFirst(input);
      return findFirstCustomer;
    }),
  findManyCustomer: publicProcedure
    .input(CustomerFindManySchema).query(async ({ ctx, input }) => {
      const findManyCustomer = await ctx.prisma.customer.findMany(input);
      return findManyCustomer;
    }),
  findUniqueCustomer: publicProcedure
    .input(CustomerFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueCustomer = await ctx.prisma.customer.findUnique(input);
      return findUniqueCustomer;
    }),
  updateOneCustomer: publicProcedure
    .input(CustomerUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneCustomer = await ctx.prisma.customer.update(input);
      return updateOneCustomer;
    }),
  upsertOneCustomer: publicProcedure
    .input(CustomerUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneCustomer = await ctx.prisma.customer.upsert(input);
      return upsertOneCustomer;
    }),

}) 
