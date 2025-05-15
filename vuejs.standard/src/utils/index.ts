import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs, { Dayjs } from 'dayjs';
import numeral from 'numeral';

export const DEFAULT_TIME_FORMAT = 'HH:mm:ss';
export const DEFAULT_HOUR_MINUTE_FORMAT = 'HH:mm';
export const DEFAULT_DATE_FORMAT = 'DD/MM/YYYY';
export const DATE_MONTH_FORMAT = 'DD MMM';
export const DATE_FULLMONTH_FORMAT = 'DD MMMM';
export const MONTH_YEAR_FORMAT = 'MMM YYYY';
export const DATE_FORMAT = 'DD';
export const DATE_MONTH_YEAR_FORMAT = 'DD MMM YYYY';
export const DATE_MONTHFULL_YEAR_FORMAT = 'DD MMMM YYYY';
export const FULL_DATE_TIME_24H_FORMAT = 'DD MMM YYYY, HH:mmA';
export const FULL_DATE_TIME_12H_FORMAT_IN_SECOND = 'DD MMM YYYY, hh:mm:ssA';
export const FULL_DATE_MONTH_TIME_24H_FORMAT = 'DD MMMM YYYY, HH:mmA';
export const FULL_DATE_TIME_FORMAT = 'DD MMMM YYYY, HH:mm';
export const SINGAPORE_PHONE_REGEX = /^(8|9)\d{7}$/;
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const BUSINESS_EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@(?!hotmail.com)(?!gmail.com)(?!yahoo.co)(?!yahoo.com)(?!mailinator.com)(?!gmail.co.in)(?!aol.com)(?!yandex.com)(?!msn.com)(?!gawab.com)(?!inbox.com)(?!gmx.com)(?!rediffmail.com)(?!in.com)(?!live.com)(?!hotmail.co.uk)(?!hotmail.fr)(?!yahoo.fr)(?!wanadoo.fr)(?!wanadoo.fr)(?!comcast.net)(?!yahoo.co.uk)(?!yahoo.com.br)(?!yahoo.co.in)(?!rediffmail.com)(?!free.fr)(?!gmx.de)(?!gmx.de)(?!yandex.ru)(?!ymail.com)(?!libero.it)(?!outlook.com)(?!uol.com.br)(?!bol.com.br)(?!mail.ru)(?!cox.net)(?!hotmail.it)(?!sbcglobal.net)(?!sfr.fr)(?!live.fr)(?!verizon.net)(?!live.co.uk)(?!googlemail.com)(?!yahoo.es)(?!ig.com.br)(?!live.nl)(?!bigpond.com)(?!terra.com.br)(?!yahoo.it)(?!neuf.fr)(?!yahoo.de)(?!live.com)(?!yahoo.de)(?!rocketmail.com)(?!att.net)(?!laposte.net)(?!facebook.com)(?!bellsouth.net)(?!yahoo.in)(?!hotmail.es)(?!charter.net)(?!yahoo.ca)(?!yahoo.com.au)(?!rambler.ru)(?!hotmail.de)(?!tiscali.it)(?!shaw.ca)(?!yahoo.co.jp)(?!sky.com)(?!earthlink.net)(?!optonline.net)(?!freenet.de)(?!t-online.de)(?!aliceadsl.fr)(?!virgilio.it)(?!home.nl)(?!qq.com)(?!telenet.be)(?!me.com)(?!yahoo.com.ar)(?!tiscali.co.uk)(?!yahoo.com.mx)(?!gmx.net)(?!mail.com)(?!planet.nl)(?!tin.it)(?!live.it)(?!ntlworld.com)(?!arcor.de)(?!yahoo.co.id)(?!frontiernet.net)(?!hetnet.nl)(?!live.com.au)(?!yahoo.com.sg)(?!zonnet.nl)(?!club-internet.fr)(?!juno.com)(?!optusnet.com.au)(?!blueyonder.co.uk)(?!bluewin.ch)(?!skynet.be)(?!sympatico.ca)(?!windstream.net)(?!mac.com)(?!centurytel.net)(?!chello.nl)(?!live.ca)(?!aim.com)(?!bigpond.ne)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/;
export const DIGIT_REGEX = /\d/;
export const LOWERCASE_REGEX = /[a-z]/;
export const UPPERCASE_REGEX = /[A-Z]/;
export const SPECIAL_REGEX = /[`~!@#$%^&*()\-_+=[{\]}\\|;:'",<.>/?]/;
export const NOT_SPECIAL_REGEX = /^[A-Za-z0-9._]+$/;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function dateTimeFormat(
  date: Dayjs | string | number | Date,
  format = FULL_DATE_TIME_FORMAT,
) {
  return dayjs(date).format(format);
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
