import dayjs, { Dayjs } from "dayjs";

const schedulesPerHour = 2;
const startHour = 8;
const endHour = 20;
const minutesPerHour = 60;
const hoursPerDay = 24;

type ScheduleTime = {
  title: string;
  hour: number;
  minutes: number;
  dateTime(date: Date): Dayjs;
};

export const day: ScheduleTime[] = [
  ...Array((endHour - startHour) * schedulesPerHour),
].map((_, index) => {
  const hour = startHour + Math.floor(index / schedulesPerHour);
  const minute =
    ((index % schedulesPerHour) * minutesPerHour) / schedulesPerHour;
  return {
    title:
      "00".concat(hour.toString()).slice(-2) +
      ":" +
      "00".concat(minute.toString()).slice(-2),
    hour: hour,
    minutes: minute,
    dateTime: (date: Date): Dayjs => {
      return dayjs(date).hour(hour).minute(minute);
    },
  };
});
