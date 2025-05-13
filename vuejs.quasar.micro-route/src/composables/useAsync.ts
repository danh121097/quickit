interface UseAsyncOptions<T, U extends any[]> {
  fn: (...args: U) => Promise<T>;
  onError?: (error: any) => void;
  onSuccess?: (data: T) => void;
  onSettled?: () => void;
}

interface UseAsyncResult<T, U extends any[]> {
  data: Ref<T | undefined>;
  error: Ref<any | null>;
  loading: Ref<boolean>;
  execute: (...args: U) => Promise<void>;
  refetch: (...args: U) => Promise<void>;
}

export function useAsync<T, U extends any[]>(options: UseAsyncOptions<T, U>): UseAsyncResult<T, U> {
  const data = ref<T>();
  const error = ref<any>();
  const loading = ref(false);

  const { fn, onError = () => {}, onSuccess = () => {}, onSettled = () => {} } = options;

  async function execute(...args: U) {
    try {
      loading.value = true;
      data.value = await fn(...args);
      onSuccess(data.value);
    } catch (err) {
      error.value = err;
      onError(err);
    } finally {
      onSettled();
      loading.value = false;
    }
  }

  async function refetch(...args: U) {
    await execute(...args);
  }

  return { data, error, loading, execute, refetch };
}
