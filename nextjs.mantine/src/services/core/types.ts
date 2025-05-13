import { QueryKey } from '@tanstack/query-core';
import { UseQueryOptions } from '@tanstack/react-query';

export interface IHttpError {
  status?: number;
  message: string;
}

export type QueryOptions<
  TQueryFnData = unknown,
  TError = IHttpError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  'initialData'
> & {
  initialData?: () => undefined;
};

export interface IPaginateResponse<T> {
  items: T[];
  total: number;
  page: number;
}
