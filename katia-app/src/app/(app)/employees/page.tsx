import EmployeeList, { EmployeeEmptyState } from "@/components/employees/List";
import { api } from "@/lib/trpc/api";
import * as React from "react";

/**
 * List -> Form
 * Row -> Employee Page (History)
 */

export interface IEmployeesPageProps { }

export default async function EmployeesPage(props: IEmployeesPageProps) {
  const employees = await api.employee.findAll.query();

  return (
    <div>
      {employees.length == 0 && <EmployeeEmptyState></EmployeeEmptyState>}
      <EmployeeList employees={employees}></EmployeeList>
    </div>
  );
}
