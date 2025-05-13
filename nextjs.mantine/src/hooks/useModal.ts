import { ButtonProps, GroupProps } from '@mantine/core';
import { modals } from '@mantine/modals';
import { ReactNode } from 'react';

export type ConfirmLabels = Record<'confirm' | 'cancel', ReactNode>;

export interface ConfirmModalProps {
  id?: string;
  children?: React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  closeOnConfirm?: boolean;
  closeOnCancel?: boolean;
  cancelProps?: ButtonProps &
    React.ComponentPropsWithoutRef<'button'> &
    Record<`data-${string}`, string>;
  confirmProps?: ButtonProps &
    React.ComponentPropsWithoutRef<'button'> &
    Record<`data-${string}`, string>;
  groupProps?: GroupProps;
  labels?: ConfirmLabels;
}

export function useModal() {
  return {
    openModal({ labels, ...config }: ConfirmModalProps) {
      const defaultLabels: ConfirmLabels = {
        confirm: 'Confirm',
        cancel: 'Cancel',
      };
      modals.openConfirmModal({
        labels: labels || defaultLabels,
        centered: true,
        ...config,
      });
    },
    closeModal() {
      modals.closeAll();
    },
  };
}
