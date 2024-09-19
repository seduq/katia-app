"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import EmployeeForm from "./Form";
import { InferEmployee, SchemaEmployee } from "@/lib/db/schemas/employees";
import { z } from "zod";

export default function EmployeeModal({
  employee,
  emptyState,
}: {
  employee?: InferEmployee;
  emptyState?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const editing = !!employee?.id;
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        {emptyState ? (
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Novo Funcionário
          </Button>
        ) : (
            <Button
              variant={editing ? "default" : "outline"}
              size={editing ? "sm" : "icon"}
            >
              {editing ? "Atualizar" : "+"}
            </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="px-5 pt-5">
          <DialogTitle>{editing ? `${employee.name}` : "Funcionário"}</DialogTitle>
        </DialogHeader>
        <div className="px-5 pb-5">
          <EmployeeForm closeModal={closeModal} employee={employee} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
