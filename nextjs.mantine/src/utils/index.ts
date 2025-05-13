import dayjs, { Dayjs } from 'dayjs';
import numeral from 'numeral';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const DEFAULT_TIME_FORMAT = 'HH:mm:ss';
export const DEFAULT_HOUR_MINUTE_FORMAT = 'HH:mm';
export const DEFAULT_DATE_FORMAT = 'DD/MM/YYYY';
export const DATE_MONTH_FORMAT = 'DD MMM';
export const DATE_FULLMONTH_FORMAT = 'DD MMMM';
export const MONTH_YEAR_FORMAT = 'MMM YYYY';
export const DATE_FORMAT = 'DD';
export const DATE_MONTH_YEAR_FORMAT = 'DD MMM YYYY';
export const DATE_MONTHFULL_YEAR_FORMAT = 'DD MMMM YYYY';
export const FULL_DATE_TIME_24H_FORMAT = 'DD MMM YYYY, hh:mmA';
export const FULL_DATE_TIME_12H_FORMAT_IN_SECOND = 'DD MMM YYYY, hh:mm:ssA';
export const FULL_DATE_MONTH_TIME_24H_FORMAT = 'DD MMMM YYYY, hh:mm';
export const FULL_DATE_TIME_FORMAT = 'DD/MM/YYYY, hh:mmA';
export const DEFAULT_YEAR_MONTH_DATE_FORMAT = 'YYYY-MM-DD';
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const DEFAULT_PAGE_SIZE = 10;

export function numeralFormat(number: number, type = '0,0', currency = '$') {
  return currency + numeral(number).format(type);
}

export function dateTimeFormat(
  date: Dayjs | Date | string | number | undefined | null,
  format = FULL_DATE_TIME_FORMAT,
) {
  if (date === null || date === undefined) return 'N/A';
  return dayjs(date).format(format);
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
