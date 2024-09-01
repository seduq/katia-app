import { db } from "@/lib/db/index";
import { EmployeeId } from "@/lib/db/schema/employees";
import { type ScheduleId, scheduleIdSchema } from "@/lib/db/schema/schedules";
import dayjs from "dayjs";

export const getSchedules = async () => {
  const s = await db.schedule.findMany({
    include: { client: true, employee: true },
  });
  return { schedules: s };
};

export const getScheduleById = async (id: ScheduleId) => {
  const { id: scheduleId } = scheduleIdSchema.parse({ id });
  const s = await db.schedule.findFirst({
    where: { id: scheduleId },
    include: { client: true, employee: true },
  });
  return { schedule: s };
};

export const getSchedulesByDate = async (dateTime: Date) => {
  const startDay = dayjs(dateTime).hour(0).minute(0).second(0).toDate();
  const endDay = dayjs(dateTime).hour(23).minute(59).second(59).toDate();
  const s = await db.schedule.findMany({
    where: {
      time: {
        lte: endDay,
        gte: startDay,
      },
    },
    include: {
      client: true,
      employee: true,
    },
  });
  return { schedules: s };
};

export const getSchedulesByDateAndEmployee = async (dateTime: Date, employeeId: EmployeeId) => {
  const startDay = dayjs(dateTime).hour(0).minute(0).second(0).toDate();
  const endDay = dayjs(dateTime).hour(23).minute(59).second(59).toDate();
  const s = await db.schedule.findMany({
    where: {
      AND: {
      time: {
        lte: endDay,
        gte: startDay,
      },
      employeeId: employeeId
    }
    },
    include: {
      client: true,
      employee: true,
    },
  });
  return { schedules: s };
};
