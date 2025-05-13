import { notifications } from '@mantine/notifications';
export function useNotifications() {
  return {
    showError({ message, title }: { message: string; title?: string }) {
      notifications.show({
        title: title || 'Error occur',
        message,
        color: 'red',
      });
    },

    showSuccess({ message, title }: { message: string; title?: string }) {
      notifications.show({
        title: title || 'Success',
        message,
        color: 'green',
      });
    },
  };
}
