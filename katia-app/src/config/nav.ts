import { Calendar, Contact, HomeIcon, LucideIcon, User } from "lucide-react";

export interface SidebarLink {
  title: string;
  href: string;
  icon: LucideIcon;
}

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
