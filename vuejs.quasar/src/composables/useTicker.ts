export function useTicker(mode: 's' | 'm' = 's') {
  const now = ref(Date.now());
  let secInterval: NodeJS.Timeout;

  const stopTicker = () => {
    clearInterval(secInterval);
  };

  onMounted(() => {
    secInterval = setInterval(
      () => {
        now.value = Date.now();
      },
      mode === 's' ? 1000 : 60000,
    );
  });

  onBeforeUnmount(stopTicker);

  return {
    now,
    stopTicker,
  };
}
