import { Dialog } from '@routerDialogs';
import { Home } from '@routerPages';

export const routes = [
  {
    path: 'home',
    component: Home,
    bgm: '',
  },
];

export const dialogs = [
  {
    path: 'dialog',
    component: Dialog,
    actived: false,
    position: 'standard',
    fullscreen: false,
    transitionShow: '',
    transitionHide: '',
    persistent: true,
  },
];
