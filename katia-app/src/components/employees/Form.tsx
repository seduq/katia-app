"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import pt_br from "@/translations";
import { Employee } from "@prisma/client";
import { z } from "zod";
import { SchemaEmployee } from "@/lib/db/schemas/employees";


const EmployeeForm = ({
  employee,
  closeModal,
}: {
  employee?: z.infer<typeof SchemaEmployee>;
  closeModal?: () => void;
}) => {
  const editing = !!employee?.id;

  const router = useRouter();
  const utils = trpc.useUtils();

  const form = useForm<typeof SchemaEmployee._input>({
    resolver: zodResolver(SchemaEmployee)
  })

  utils.employee.invalidate();

  const onSuccess = async (
    action: "create" | "update" | "delete",
    data?: { error?: string }
  ) => {
    if (data?.error) {
      toast.error(data.error);
      return;
    }

    router.refresh();
    if (closeModal) closeModal();
    switch (action) {
      case "create":
        toast.success(`Funcionário criado!`);
        break;
      case "update":
        toast.success(`Funcionário atualizado!`);
        break;
    }
  };

  const onError = async (
    action: "create" | "update" | "delete",
    data?: { error?: string }
  ) => {
    if (data?.error) {
      toast.error(`${action} ${data.error}`);
      return;
    }
  };

  const { mutate: createEmployee, isLoading: isCreating } =
    trpc.employee.createOneEmployee.useMutation({
      onSuccess: (_) => onSuccess("create"),
      onError: (err) => onError("create", { error: err.message }),
    });

  // const { mutate: deleteEmployee, isLoading: isDeleting } =
  //   trpc.employee.deleteOneEmployee.useMutation({
  //     onSuccess: (_) => onSuccess("delete"),
  //     onError: (err) => onError("delete", { error: err.message }),
  //   });

  // const handleSubmit = (values: Prisma.EmployeeCreateInput) => {
  //   console.log(values);
  //   upsertEmployee({ where: { id: values.id }, update: values, create: values });
  // };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={"space-y-8"}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mr-1"
          disabled={isCreating}
        >
          {pt_br.Form.Button(editing, isCreating, isCreating && editing)}
        </Button>
      </form>
    </Form>
  );
};

export default EmployeeForm;
