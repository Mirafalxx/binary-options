export const adjustFromTo = (period, toTimestamp, count) => {
  let to = toTimestamp;
  let from = to;
  switch (period.timespan) {
    case "minute": {
      to = to - (to % (60 * 1000));
      from = to - count * period.multiplier * 60 * 1000;
      break;
    }
    case "hour": {
      to = to - (to % (60 * 60 * 1000));
      from = to - count * period.multiplier * 60 * 60 * 1000;
      break;
    }
    case "day": {
      to = to - (to % (60 * 60 * 1000));
      from = to - count * period.multiplier * 24 * 60 * 60 * 1000;
      break;
    }
    case "week": {
      const date = new Date(to);
      const week = date.getDay();
      const dif = week === 0 ? 6 : week - 1;
      to = to - dif * 60 * 60 * 24;
      const newDate = new Date(to);
      to = new Date(`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`).getTime();
      from = count * period.multiplier * 7 * 24 * 60 * 60 * 1000;
      break;
    }
    case "month": {
      const date = new Date(to);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      to = new Date(`${year}-${month}-01`).getTime();
      from = count * period.multiplier * 30 * 24 * 60 * 60 * 1000;
      const fromDate = new Date(from);
      from = new Date(`${fromDate.getFullYear()}-${fromDate.getMonth() + 1}-01`).getTime();
      break;
    }
    case "year": {
      const date = new Date(to);
      const year = date.getFullYear();
      to = new Date(`${year}-01-01`).getTime();
      from = count * period.multiplier * 365 * 24 * 60 * 60 * 1000;
      const fromDate = new Date(from);
      from = new Date(`${fromDate.getFullYear()}-01-01`).getTime();
      break;
    }
    default:
      return null;
  }
  return [from, to];
};

export const formatTime = (seconds) => {
  if (!seconds) return;
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
};

export const formatCountdown = (seconds) => {
  if (seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};
