"use client"
import { trpc } from "@/lib/trpc/client";
import { Employee, EmployeePayload, Prisma, PrismaClient } from "@prisma/client";
import EmployeeModal from "./Modal";
import { EmployeeSchema } from '@/lib/db/schemas/employees';
import { z } from "zod";

export default function EmployeeList() {
  const { data: employees } = trpc.employee.findManyEmployee.useQuery(
    {},
    {
      refetchOnMount: false,
    }
  );

  if (employees?.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul>
      {employees?.map((employee) => (
        <EmployeeRow employee={employee} key={employee.id} />
      ))}
    </ul>
  );
}

const EmployeeRow = ({ employee }: { employee: z.infer<typeof EmployeeSchema> }) => {
  return (
    <li className="flex justify-between my-2">
      <div className="w-full">
        <div>{employee.name}</div>
      </div>
      <EmployeeModal employee={employee} />
    </li>
  );
};

const EmptyState = () => {
  return (
    <div className="text-center">
      <h3 className="mt-2 text-sm font-semibold text-secondary-foreground">
        Nenhum funcionário
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Adicione um funcionário
      </p>
      <div className="mt-6">
        <EmployeeModal emptyState={true} />
      </div>
    </div>
  );
};
