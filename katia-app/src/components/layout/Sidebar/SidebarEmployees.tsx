import { SidebarContent } from "./SidebarContent";
import { SidebarLink } from "@/config/nav";
import { User } from "lucide-react";
import { Employee } from "@prisma/client";

export interface ISidebarEmployeesProps {
  employees: Employee[] | undefined;
}

export function SidebarEmployees({ employees }: ISidebarEmployeesProps) {
  return (
    <SidebarContent
      title="Funcionários"
      border
      links={employees?.map<SidebarLink>((e) => ({
        href: `/employees/${e.id}`,
        icon: User,
        title: `${e.name}`,
      }))}
    ></SidebarContent>
  );
}
