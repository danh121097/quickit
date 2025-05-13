<template>
  <slot :currentPath="to" :push="push"></slot>

  <transition-group name="page-slide" :css="cssTransition" @enter="onEnter">
    <RoutePage
      v-for="(route, i) in resolveRoutes"
      :style="{
        transition: cssTransition ? 'transform .5s cubic-bezier(0.65, 0, 0.35, 1)' : 'none',
        'z-index': i,
      }"
      :class="{
        deactive: resolveRoutes.length > 1 && i !== resolveRoutes.length - 1,
      }"
      :key="route.path"
    >
      <component :is="route.component" v-bind="route.attrs" />
    </RoutePage>
  </transition-group>
  <q-dialog
    :key="`dialog-${dialog.path}`"
    v-for="dialog in resolveDialogs"
    maximized
    :persistent="dialog.persistent"
    :position="dialog.position"
    :transitionShow="dialog.transitionShow"
    :transitionHide="dialog.transitionHide"
    v-model="dialog.actived"
  >
    <component :is="dialog.component" v-bind="dialog.attrs" />
  </q-dialog>
</template>

<script setup lang="ts">
import gsap, { Power2 } from 'gsap';
import { delay, intersection } from 'lodash';
import { MicroDialog, MicroRoute, useMicroRouter } from 'vue-micro-route';

gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

interface Props {
  defaultPath: string;
  routesGetter: MicroRoute[];
  dialogs: MicroDialog[];
  defaultBgm?: string;
}

const props = defineProps<Props>();

const { resolveRoutes, resolveDialogs, to, from, push } = useMicroRouter({
  defaultPath: props.defaultPath,
  routesGetter: props.routesGetter,
  dialogGetter: props.dialogs,
});

const cssTransition = computed(() => {
  const toPaths = to.value.split('/').filter(Boolean);
  const fromPaths = from.value.split('/').filter(Boolean);
  return Boolean(intersection(toPaths, fromPaths).length);
});

function onEnter(el: Element, done: () => void) {
  if (!cssTransition.value)
    gsap.fromTo(
      el,
      {
        xPercent: -100,
      },
      {
        xPercent: 0,
        duration: 0.5,
        ease: Power2.easeInOut,
        onComplete: done,
      },
    );
  else delay(done, 500);
}
</script>
