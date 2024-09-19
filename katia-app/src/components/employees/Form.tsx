"use client";
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
import { z } from "zod";
import { InferEmployee, SchemaEmployee } from "@/lib/db/schemas/employees";
import { useZodForm } from "@/lib/utils";
import { FormAction } from "@/translations/form";


const EmployeeForm = ({
  employee,
  closeModal,
}: {
  employee?: InferEmployee;
  closeModal?: () => void;
}) => {
  const editing = !!employee?.id;

  const router = useRouter();
  const utils = trpc.useUtils();

  const form = useZodForm<InferEmployee>({
    defaultValues: employee,
    schema: SchemaEmployee
  });

  //utils.employee.invalidate();

  const onSuccess = async (
    action: FormAction,
    data?: { error?: string }
  ) => {
    if (data?.error) {
      onError(action, data);
      return;
    }

    router.refresh();
    if (closeModal) closeModal();
    switch (action) {
      case "update":
        pt_br.Form.Toaster("funcionário", action, false);
        break;
      case "delete":
        pt_br.Form.Toaster("funcionário", action, false);
        break;
    }
  };

  const onError = async (
    action: FormAction,
    data?: { error?: string }
  ) => {
    router.refresh();
    if (closeModal) closeModal();
    switch (action) {
      case "update":
        pt_br.Form.Toaster("funcionário", action, false, data?.error);
        break;
      case "delete":
        pt_br.Form.Toaster("funcionário", action, false, data?.error);
        break;
    }
  };

  const { mutate: updateEmployee, isPending: isCreating } =
    trpc.employee.updateOneEmployee.useMutation({
      onSuccess: (_) => onSuccess("update"),
      onError: (err) => onError("update", { error: err.message }),
    });

  const { mutate: deleteEmployee, isPending: isDeleting } =
    trpc.employee.deleteOneEmployee.useMutation({
      onSuccess: (_) => onSuccess("delete"),
      onError: (err) => onError("delete", { error: err.message }),
    });

  const handleSubmit = (values: InferEmployee) => {
    if (editing)
      deleteEmployee(values);
    else
      updateEmployee(values);
  };

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
        />{
          editing &&
          <Button
            type="submit"
            className="mr-1"
          >
            {pt_br.Form.Button("update", isCreating || isDeleting)}
          </Button>}
        <Button
          type="submit"
          className="mr-1"
        >
          {pt_br.Form.Button(editing ? "delete" : "update", isCreating || isDeleting)}
        </Button>
      </form>
    </Form>
  );
};

export default EmployeeForm;
