import dayjs from "dayjs";

const comparator = (a, b) => {
  if (a.label.toLowerCase() < b.label.toLowerCase()) {
    return -1;
  }
  if (a.label.toLowerCase() > b.label.toLowerCase()) {
    return 1;
  }
  return 0;
};

export const genreToFilter = (genres) => {
  const genreFilters = [];
  Object.keys(genres).forEach((key) =>
    genreFilters.push({ value: key, label: genres[key] }),
  );
  genreFilters.sort(comparator);

  return genreFilters;
};

export const formatRuntime = (m: number): string => {
  const hours: number = m / 60;
  const rhours: number = Math.floor(hours);
  const minutes: number = (hours - rhours) * 60;
  const rminutes: number = Math.round(minutes);
  return rhours !== 0 ? `${rhours}h ${rminutes}m` : `${rminutes}m`;
};

export const formatDate = (date: string): string => {
  return dayjs(date, "YYYY-MM-DD").format("MMM D, YYYY");
};

export const parseCertification = (certifications: any): string => {
  let flag = true;
  let parsed;

  certifications.results.every((result) => {
    if (result.iso_3166_1 === "US") {
      result.release_dates.every((date) => {
        if (date.certification !== "") {
          parsed = date.certification;
          flag = false;
        }
        return flag;
      });
    }
    return flag;
  });

  return flag ? "NR" : parsed;
};
