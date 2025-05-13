<script setup lang="ts">
import { useGlobalStore } from '@stores';
import { MicroDialog } from 'vue-micro-route';
import { dialogs, routes } from '@microRouter';

const routesGenerated = {
  routes: routes,
  dialogs: dialogs as MicroDialog[],
};

const storeGlobal = useGlobalStore();

const { defaultPath } = storeToRefs(storeGlobal);
</script>
<template>
  <MicroRouterView
    :default-path="`/${defaultPath}`"
    :routes-getter="routesGenerated.routes"
    default-bgm="default"
    :dialogs="routesGenerated.dialogs"
  />
</template>
