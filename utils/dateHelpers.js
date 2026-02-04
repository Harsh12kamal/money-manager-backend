import dayjs from "dayjs";

export const getDateRange = (type) => {
  const now = dayjs();

  switch (type) {
    case "daily":
      return {
        start: now.startOf("day").toDate(),
        end: now.endOf("day").toDate()
      };
    case "weekly":
      return {
        start: now.startOf("week").toDate(),
        end: now.endOf("week").toDate()
      };
    case "monthly":
      return {
        start: now.startOf("month").toDate(),
        end: now.endOf("month").toDate()
      };
    case "yearly":
      return {
        start: now.startOf("year").toDate(),
        end: now.endOf("year").toDate()
      };
    default:
      return null;
  }
};

export const canEditTransaction = (createdAt) => {
  return dayjs().diff(dayjs(createdAt), "hour") <= 12;
};

export const buildDateFilter = (startDate, endDate) => {
  if (!startDate || !endDate) return null;
  return {
    $gte: new Date(startDate),
    $lte: new Date(endDate)
  };
};
