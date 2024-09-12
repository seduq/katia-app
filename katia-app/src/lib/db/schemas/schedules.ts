import { Schedule } from '@prisma/client';
import { z } from 'zod';
import { ICompleteEmployee, LazyEmployee } from "./employees";
import { ICompleteCustomer, LazyCustomer } from './customers';

export const CompleteSchedule = z.object({
  id: z.string(),
  time: z.date(),
  comment: z.string(),
  price: z.number(),
  customerId: z.string(),
  employeeId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
}) satisfies z.ZodType<Schedule>;

export interface ICompleteSchedule extends Schedule {
  customer: ICompleteCustomer
  employee: ICompleteEmployee
};


export const LazySchedule: z.ZodSchema<ICompleteSchedule> = z.lazy(() => CompleteSchedule.extend({
  customer: LazyCustomer,
  employee: LazyEmployee,
}))

export interface IEmployeeSchedule extends Omit<Schedule, 'employeeId'> {
  customer: ICompleteCustomer
};

export const LazyEmployeeSchedule: z.ZodSchema<IEmployeeSchedule> = z.lazy(() => CompleteSchedule.omit({employeeId: true}).extend({
  customer: LazyCustomer,
}))

export interface ICustomerSchedule extends Omit<Schedule, 'customerId'> {
  employee: ICompleteEmployee
};

export const LazyCustomerSchedule: z.ZodSchema<ICustomerSchedule> = z.lazy(() => CompleteSchedule.extend({
  employee: LazyEmployee,
}))