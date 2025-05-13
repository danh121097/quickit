<script setup lang="ts">
const { openDialog } = useMicroRoute();
</script>

<template>
  <div
    class="bg-yellow-400 text-center w-screen h-screen flex justify-center items-center text-2xl"
  >
    <q-btn color="red" @click="openDialog('dialog')">Dialog</q-btn>
  </div>
</template>
