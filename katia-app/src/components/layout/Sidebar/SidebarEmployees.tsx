import { trpc } from "@/lib/trpc/client";
import { SidebarItem } from "./SidebarItem";
import { SidebarLink } from "@/config/nav";
import { User } from "lucide-react";
import { Employee } from "@prisma/client";

export interface ISidebarEmployeesProps {
  employees: Employee[];
}

export function SidebarEmployees({ employees }: ISidebarEmployeesProps) {
  return (
    <SidebarItem
      title="Funcionários"
      employee
      border
      links={employees.map<SidebarLink>((e) => ({
        href: `/employees/${e.id}`,
        icon: User,
        title: `${e.name}`,
      }))}
    ></SidebarItem>
  );
}
