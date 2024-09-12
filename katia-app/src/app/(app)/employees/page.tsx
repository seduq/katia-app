import EmployeeList from "@/components/employees/List";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc/client";
import * as React from "react";

/**
 * List -> Form
 * Row -> Employee Page (History)
 */

export interface IEmployeesPageProps {}

export default function EmployeesPage(props: IEmployeesPageProps) {
  return (
    <section>
      <EmployeeList></EmployeeList>
    </section>
  );
}
