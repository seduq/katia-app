import EmployeeList from "@/components/employees/List";
import * as React from "react";

/**
 * List -> Form
 * Row -> Employee Page (History)
 */

export interface IEmployeesPageProps { }

export default async function EmployeesPage(props: IEmployeesPageProps) {
  return (
    <section>
      <EmployeeList></EmployeeList>
    </section>
  );
}
