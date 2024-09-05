import { trpc } from "@/lib/trpc/client";
import { SidebarItem } from "./SidebarItem";
import { SidebarLink } from "@/config/nav";
import { User } from "lucide-react";

export function SidebarEmployees() {
  const { data: employees } = trpc.employee.findManyEmployee.useQuery(
    {},
    { refetchOnMount: false }
  );

  if (employees == undefined) return null;

  return (
    <SidebarItem
      title="Funcionários"
      border
      links={employees?.map<SidebarLink>((e) => ({
        href: `/employees/${e.id}`,
        icon: User,
        title: `${e.name}`,
      }))}
    ></SidebarItem>
  );
}
