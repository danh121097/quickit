export * from './constants';

import dayjs, { Dayjs } from 'dayjs';
import numeral from 'numeral';
import { Notify } from 'quasar';
import { EMAIL_REGEX, FULL_DATE_TIME_FORMAT, SINGAPORE_PHONE_REGEX } from './constants';
import { NotifyOtp } from './notify';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(isBetween);

let dismiss: (opt?: NotifyOtp) => void;

export function showNotify(options: NotifyOtp) {
  dismiss != void 0 && dismiss();
  if (!options) return;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  dismiss = Notify.create({ ...options, html: true });
  return dismiss;
}

export function closeNotify() {
  dismiss && dismiss();
}

export function successNotify(options: NotifyOtp) {
  return showNotify({
    classes: options.classes || 'notify-success',
    position: options.position || 'top',
    timeout: options.timeout || 5000,
    actions: options.actions || [
      {
        handler: closeNotify,
      },
    ],
  });
}

export function errorNotify(options: NotifyOtp) {
  return showNotify({
    classes: options.classes || 'notify-error',
    position: options.position || 'top',
    timeout: options.timeout || 5000,
    actions: options.actions || [
      {
        handler: closeNotify,
      },
    ],
  });
}

export function numeralFormat(number: number, type = 'AUTO') {
  if (type === 'AUTO') {
    switch (true) {
      case Number.isNaN(number):
        type = '0,0';
        break;
      case Math.floor(number) !== number:
        type = '0,0.00';
        break;
      default:
        type = '0,0';
        break;
    }
  }
  return numeral(number).format(type);
}

export function removeSpecialKey(str: string, specialKey = '_') {
  if (str) {
    const convertToArray = str.toLowerCase().split(specialKey);
    const result = convertToArray.map(function (val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(' ');
  }
  return '';
}

export function removeSpace(str: string) {
  return str.replace(/\s/g, '');
}

export function dateTimeFormat(
  date: Dayjs | string | number | Date,
  format = FULL_DATE_TIME_FORMAT,
) {
  return dayjs(date).format(format);
}

export function isDifferentDay(date1: string, date2: string) {
  if (!date1 || !date2) return false;
  const d1 = dayjs(date1, 'YYYY-MM-DD');
  const d2 = dayjs(date2, 'YYYY-MM-DD');
  return !!dayjs(d1).diff(d2, 'day');
}

export function isSameDay(date1: string, date2: string) {
  if (!date1 || !date2) return false;
  const d1 = dayjs(date1, 'YYYY-MM-DD');
  const d2 = dayjs(date2, 'YYYY-MM-DD');
  return !!dayjs(d1).isSame(d2, 'day');
}

export function convertTime(milisecons: number) {
  const mils = Math.max(milisecons, 0);
  const days = Math.floor(mils / (1000 * 60 * 60 * 24));
  const hours = Math.floor((mils / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((mils / 1000 / 60) % 60);
  const seconds = Math.floor((mils / 1000) % 60);

  return {
    days: ('0' + days).slice(-2),
    hours: ('0' + hours).slice(-2),
    seconds: ('0' + seconds).slice(-2),
    minutes: ('0' + minutes).slice(-2),
  };
}

export function timeCountDown(time: number) {
  if (time <= 0) return `00s`;

  const { days, hours, minutes, seconds } = convertTime(time);

  if (+days > 0) {
    return `${days}$d ${hours}$h`;
  } else if (+hours > 0) {
    return `${hours}h ${minutes}m`;
  } else if (+minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
}

export function isSingaporeNumber(mobile_number: string) {
  return SINGAPORE_PHONE_REGEX.test(mobile_number);
}

export function isEmailValid(email: string) {
  return EMAIL_REGEX.test(email);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
