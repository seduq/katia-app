import z from 'zod';
import { Employee, Schedule } from '@prisma/client';
import { LazyEmployeeSchedule, IEmployeeSchedule, ICompleteSchedule, LazySchedule } from './schedules';
import { timestamps } from '../utils';

export const SchemaEmployee = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
}) satisfies z.ZodType<Employee>;

export interface ICompleteEmployee extends Employee {
  schedules: Schedule[]
};

export const BaseEmployee = SchemaEmployee.omit(timestamps);
export const PayloadEmployee = BaseEmployee.omit({ id: true });
export const IdEmployee = BaseEmployee.pick({ id: true });

export type InferEmployee = z.infer<typeof SchemaEmployee>;


export const LazyEmployee: z.ZodSchema<ICompleteEmployee> = z.lazy(() => SchemaEmployee.extend({
  schedules: LazySchedule.array(),
}))
