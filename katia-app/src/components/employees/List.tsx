"use client"
import { trpc } from "@/lib/trpc/client";
import EmployeeModal from "./Modal";
import { InferEmployee } from '@/lib/db/schemas/employees';
import { z } from "zod";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export interface IEmployeeList {
  employees: InferEmployee[];
}

export default function EmployeeList(props: IEmployeeList) {
  const { data: employees } = trpc.employee.findAll.useQuery(undefined, {
    initialData: props.employees,
    refetchOnMount: false
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees?.map((employee) => (
          <EmployeeRow employee={employee} key={employee.id} />
        ))}
      </TableBody>
    </Table>
  );
}

const EmployeeRow = ({ employee }: { employee: InferEmployee }) => {
  return (
    <TableRow>
      <TableCell>
        {employee.name}
      </TableCell>
      <TableCell>
        <EmployeeModal employee={employee} />
      </TableCell>
    </TableRow>
  );
};

export const EmployeeEmptyState = () => {
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
