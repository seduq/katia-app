"use client";
import { additionalLinks, defaultLinks } from "@/config/nav";
import * as React from "react";
import { SidebarContent } from "./SidebarContent";
import { SidebarEmployees } from "./SidebarEmployees";
import { Employee } from "@prisma/client";

export interface ISidebarProps {
  employees: Employee[] | undefined;
}

export default function Sidebar({ employees }: ISidebarProps) {
  return (
    <aside className="h-screen min-w-52 bg-muted hidden md:block p-4 pt-8 border-r border-border shadow-inner">
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold ml-4">Katia</h3>
          <SidebarContent links={defaultLinks}></SidebarContent>
          <SidebarEmployees employees={employees}></SidebarEmployees>
          {additionalLinks.length > 0
            ? additionalLinks.map((addLink) => (
              <SidebarContent
                key={addLink.title}
                links={addLink.links}
                title={addLink.title}
                border
              ></SidebarContent>
            ))
            : null}
        </div>
      </div>
    </aside>
  );
}
