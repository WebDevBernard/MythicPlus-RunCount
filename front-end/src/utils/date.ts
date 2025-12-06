import { startDate } from "../App";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

// calculates date 1 week from today
// https://codereview.stackexchange.com/questions/33527/find-next-occurring-friday-or-any-dayofweek
const today = new Date();
export function updateDate() {
  const resultDate = new Date(today.getTime() - 8 * 1000 * 60 * 60);
  resultDate.setDate(today.getDate() + ((7 + 5 - today.getDay() - 1) % 7) + 1);
  return dayjs(resultDate).format("MMMM Do YYYY");
}

// get the affix date 7 days from the start date entered in app

export const affixDate = (index: number) => {
  const today = new Date(startDate);
  const nextWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7 * index
  );
  return dayjs(nextWeek).format("MMMM Do");
};
