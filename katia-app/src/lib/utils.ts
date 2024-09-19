import { useForm, type FieldValues, type UseFormProps, type UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const timestamps: { createdAt: true; updatedAt: true } = {
  createdAt: true,
  updatedAt: true,
};


/**
 * Reusable hook for zod + react-hook-form
 */
export function useZodForm<TInput extends FieldValues>(
  props: Omit<UseFormProps<TInput>, 'resolver'> & {
    schema: z.ZodType<any, any, TInput>;
  },
) {
  const form = useForm<TInput>({
    ...props,
    resolver: zodResolver(props.schema, undefined, {
      raw: true,
    }),
  });

  return form;
}