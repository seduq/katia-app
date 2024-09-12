"use client";
import { SidebarLink } from "@/config/nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export interface ISidebarItemProps {
  links: SidebarLink[];
  title?: string;
  border?: boolean;
  employee?: boolean;
}

export function SidebarItem({
  links,
  border,
  title,
  employee,
}: ISidebarItemProps) {
  const fullPathname = usePathname();
  const pathname =
    "/" +
    fullPathname.split("/")[1] +
    (employee ? fullPathname.split("/")[2] || "" : "");

  return (
    <section className={border ? "border-border border-t my-8 pt-4" : ""}>
      {title ? (
        <h4 className="px-2 mb-2 text-xs uppercase text-muted-foreground tracking-wider">
          {title}
        </h4>
      ) : null}
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <SidebarItemLink link={link} active={fullPathname === link.href} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export interface ILinkProps {
  link: SidebarLink;
  active: boolean;
}

export function SidebarItemLink({ active, link }: ILinkProps) {
  return (
    <div>
      <Link
        href={link.href}
        className={`group transition-colors p-2 inline-block hover:bg-popover hover:text-primary text-muted-foreground text-xs hover:shadow rounded-md w-full${
          active ? " text-primary font-semibold" : ""
        }`}
      >
        <div className="flex items-center">
          <div
            className={cn(
              "opacity-0 left-0 h-6 w-[4px] absolute rounded-r-lg bg-primary",
              active ? "opacity-100" : ""
            )}
          />
          <link.icon className="h-3.5 mr-1" />
          <span>{link.title}</span>
        </div>
      </Link>
    </div>
  );
}
