import {
  useGetCookies,
  useSetCookie,
  useHasCookie,
  useDeleteCookie,
  useGetCookie,
} from 'cookies-next/client';

export function useClientCookies() {
  const setCookie = useSetCookie();
  const hasCookie = useHasCookie();
  const deleteCookie = useDeleteCookie();
  const getCookies = useGetCookies();
  const getCookie = useGetCookie();

  return { setCookie, hasCookie, deleteCookie, getCookies, getCookie };
}
