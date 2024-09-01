import { db } from "@/lib/db/index";
import { 
  ScheduleId, 
  NewScheduleParams,
  UpdateScheduleParams, 
  updateScheduleSchema,
  insertScheduleSchema, 
  scheduleIdSchema 
} from "@/lib/db/schema/schedules";

export const createSchedule = async (schedule: NewScheduleParams) => {
  const newSchedule = insertScheduleSchema.parse(schedule);
  try {
    const s = await db.schedule.create({ data: newSchedule });
    return { schedule: s };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const updateSchedule = async (id: ScheduleId, schedule: UpdateScheduleParams) => {
  const { id: scheduleId } = scheduleIdSchema.parse({ id });
  const newSchedule = updateScheduleSchema.parse(schedule);
  try {
    const s = await db.schedule.update({ where: { id: scheduleId }, data: newSchedule})
    return { schedule: s };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const deleteSchedule = async (id: ScheduleId) => {
  const { id: scheduleId } = scheduleIdSchema.parse({ id });
  try {
    const s = await db.schedule.delete({ where: { id: scheduleId }})
    return { schedule: s };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

