"use client";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc/client";
import * as React from "react";

export interface IEmployeesPageProps {}

export default function EmployeesPage(props: IEmployeesPageProps) {
  const { mutate: createOneEmployee } =
    trpc.employee.createOneEmployee.useMutation();
  return (
    <main>
    </main>
  );
}
