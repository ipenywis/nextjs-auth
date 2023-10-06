export function timeAgo(dateParam: Date) {
  const getDifferenceInUnits = (
    unit: string,
    differenceInMilliseconds: number
  ) => {
    const units: { [unit: string]: number } = {
      second: 1000,
      minute: 1000 * 60,
      hour: 1000 * 60 * 60,
      day: 1000 * 60 * 60 * 24,
      week: 1000 * 60 * 60 * 24 * 7,
      month: 1000 * 60 * 60 * 24 * 30, // assumes average month length
      year: 1000 * 60 * 60 * 24 * 365, // non-leap year
    };
    return differenceInMilliseconds / units[unit];
  };

  const date = new Date(dateParam).getTime();
  const NOW = new Date().getTime();
  const differenceInMilliseconds = NOW - date;

  if (getDifferenceInUnits("minute", differenceInMilliseconds) < 1) {
    return "Just now";
  } else if (getDifferenceInUnits("hour", differenceInMilliseconds) < 1) {
    return `${Math.round(
      getDifferenceInUnits("minute", differenceInMilliseconds)
    )}m`;
  } else if (getDifferenceInUnits("day", differenceInMilliseconds) < 1) {
    return `${Math.round(
      getDifferenceInUnits("hour", differenceInMilliseconds)
    )}h`;
  } else if (getDifferenceInUnits("week", differenceInMilliseconds) < 1) {
    return `${Math.round(
      getDifferenceInUnits("day", differenceInMilliseconds)
    )}d`;
  } else if (getDifferenceInUnits("year", differenceInMilliseconds) < 1) {
    return `${Math.round(
      getDifferenceInUnits("month", differenceInMilliseconds)
    )}mo`;
  } else {
    return `${Math.round(
      getDifferenceInUnits("year", differenceInMilliseconds)
    )}y`;
  }
}
