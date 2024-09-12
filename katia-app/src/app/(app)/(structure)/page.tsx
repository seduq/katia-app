/**
 * Basic structure
 * Sidebar
 * Navbar
 */
import Navbar from '@/components/layout/Navbar/Navbar';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import { api } from '@/lib/trpc/api';
import * as React from 'react';

export async function Structure({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  const {data: employees} = await api.employee.findAll.useQuery();
  return (
    <div>
      <div className="flex h-screen">
        <Sidebar employees={employees}></Sidebar>
        <main className="flex-1 md:p-8 pt-2 p-8 overflow-y-auto">
          <Navbar></Navbar>
          {children}
        </main>
      </div>
    </div>
  );
}
