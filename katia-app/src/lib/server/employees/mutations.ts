import { IdEmployee, LazyEmployee, PayloadEmployee, SchemaEmployee } from "@/lib/db/schemas/employees";
import { publicProcedure } from "@/lib/trpc/trpc";
import { Employee } from "@prisma/client";

export const mutations = {
  createOneEmployee: publicProcedure
    .input(PayloadEmployee).mutation(async ({ ctx, input }) => {
      const employee = PayloadEmployee.parse(input);
      const createOneEmployee = await ctx.prisma.employee.create({ data: employee });
      return createOneEmployee;
    }),
  deleteOneEmployee: publicProcedure
    .input(IdEmployee).mutation(async ({ ctx, input }) => {
      const employee = IdEmployee.parse(input);
      const deleteOneEmployee = await ctx.prisma.employee.delete({
        where: {
          id: employee.id
        }
      });
      return deleteOneEmployee;
    }),
  updateOneEmployee: publicProcedure
    .input(SchemaEmployee).mutation(async ({ ctx, input }) => {
      const employee = SchemaEmployee.parse(input);
      const updateOneEmployee = await ctx.prisma.employee.update({ where: { id: employee.id }, data: employee });
      return updateOneEmployee;
    }),
  updateScheduleEmployee: publicProcedure.input(LazyEmployee).mutation(async ({ ctx, input }) => {
    const employee = LazyEmployee.parse(input);
    const baseEmployee = employee as Employee;
    const updateScheduleEmployee = await ctx.prisma.employee.update({
      where: {
        id: employee.id
      },
      data: {
        ...baseEmployee,
        Schedule: {
          set: employee.schedules,
        }
      }
    });
    return updateScheduleEmployee;
  }),
  upsertOneEmployee: publicProcedure
    .input(SchemaEmployee).mutation(async ({ ctx, input }) => {
      const employee = SchemaEmployee.parse(input);
      const upsertOneEmployee = await ctx.prisma.employee.upsert({ where: { id: employee.id }, create: employee, update: employee });
      return upsertOneEmployee;
    }),
}