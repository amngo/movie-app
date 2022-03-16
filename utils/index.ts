import moment from 'moment';

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
  for (let key in genres) {
    genreFilters.push({ value: key, label: genres[key] });
  }
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
  return moment(date, 'YYYY-MM-DD').format('MMM D, YYYY');
};

export const parseCertification = (certifications: any): string => {
  let flag = true;

  certifications.results.every((result) => {
    if (result['iso_3166_1'] === 'US') {
      result['release_dates'].every((date) => {
        if (date.certification !== '') {
          certifications = date.certification;
          flag = false;
        }
        return flag;
      });
    }
    return flag;
  });

  return flag ? 'NR' : certifications;
};
