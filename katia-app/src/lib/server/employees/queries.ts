import { IdEmployee } from "@/lib/db/schemas/employees";
import { publicProcedure } from "@/lib/trpc/trpc";

export const queries = {
  findAll: publicProcedure.query(async ({ ctx }) => {
    const findFirstEmployee = await ctx.prisma.employee.findMany();
    return findFirstEmployee;
  }),
  findUnique: publicProcedure
    .input(IdEmployee).query(async ({ ctx, input }) => {
      const employee = IdEmployee.parse(input);
      const findUniqueEmployee = await ctx.prisma.employee.findUnique({
        where: {
          id: employee.id
        }
      });
      return findUniqueEmployee;
    }),
}