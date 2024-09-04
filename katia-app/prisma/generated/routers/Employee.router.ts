import { t, publicProcedure } from "./helpers/createRouter";
import { EmployeeCreateOneSchema } from "../schemas/createOneEmployee.schema";
import { EmployeeDeleteOneSchema } from "../schemas/deleteOneEmployee.schema";
import { EmployeeFindFirstSchema } from "../schemas/findFirstEmployee.schema";
import { EmployeeFindManySchema } from "../schemas/findManyEmployee.schema";
import { EmployeeFindUniqueSchema } from "../schemas/findUniqueEmployee.schema";
import { EmployeeUpdateOneSchema } from "../schemas/updateOneEmployee.schema";
import { EmployeeUpsertSchema } from "../schemas/upsertOneEmployee.schema";

export const employeesRouter = t.router({
  createOneEmployee: publicProcedure
    .input(EmployeeCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneEmployee = await ctx.prisma.employee.create(input);
      return createOneEmployee;
    }),
  deleteOneEmployee: publicProcedure
    .input(EmployeeDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneEmployee = await ctx.prisma.employee.delete(input);
      return deleteOneEmployee;
    }),
  findFirstEmployee: publicProcedure
    .input(EmployeeFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEmployee = await ctx.prisma.employee.findFirst(input);
      return findFirstEmployee;
    }),
  findManyEmployee: publicProcedure
    .input(EmployeeFindManySchema).query(async ({ ctx, input }) => {
      const findManyEmployee = await ctx.prisma.employee.findMany(input);
      return findManyEmployee;
    }),
  findUniqueEmployee: publicProcedure
    .input(EmployeeFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEmployee = await ctx.prisma.employee.findUnique(input);
      return findUniqueEmployee;
    }),
  updateOneEmployee: publicProcedure
    .input(EmployeeUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneEmployee = await ctx.prisma.employee.update(input);
      return updateOneEmployee;
    }),
  upsertOneEmployee: publicProcedure
    .input(EmployeeUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneEmployee = await ctx.prisma.employee.upsert(input);
      return upsertOneEmployee;
    }),

}) 
