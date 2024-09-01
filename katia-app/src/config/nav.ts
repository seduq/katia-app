import { SidebarLink } from "@/components/SidebarItems";
import { Cog, Globe, User, HomeIcon, Contact, Calendar } from "lucide-react";

export type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/", title: "Home", icon: HomeIcon },
];

export const additionalLinks: AdditionalLinks[] = [
  {
    title: "Cadastros",
    links: [
      {
        href: "/schedules",
        title: "Agendamentos",
        icon: Calendar,
      },
      {
        href: "/employees",
        title: "Funcionários",
        icon: User,
      },
      {
        href: "/clients",
        title: "Clientes",
        icon: Contact,
      },
    ],
  },
];
