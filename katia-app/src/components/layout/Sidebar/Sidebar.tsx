"use client";
import { additionalLinks, defaultLinks } from "@/config/nav";
import * as React from "react";
import { SidebarItem } from "./SidebarItem";
import { SidebarEmployees } from "./SidebarEmployees";
import { Employee } from "@prisma/client";

export interface ISidebarProps {
  employees: Employee[];
}

export default function Sidebar({employees} : ISidebarProps) {
  return (
    <aside className="h-screen min-w-52 bg-muted hidden md:block p-4 pt-8 border-r border-border shadow-inner">
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold ml-4">Katia</h3>
          <SidebarItem links={defaultLinks}></SidebarItem>
          <SidebarEmployees employees={employees}></SidebarEmployees>
          {additionalLinks.length > 0
            ? additionalLinks.map((addLink) => (
                <SidebarItem
                  key={addLink.title}
                  links={addLink.links}
                  title={addLink.title}
                  border
                ></SidebarItem>
              ))
            : null}
        </div>
      </div>
    </aside>
  );
}
