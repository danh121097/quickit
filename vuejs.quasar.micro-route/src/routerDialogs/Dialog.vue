<script setup lang="ts">
const { closeDialog } = useMicroRoute();
</script>
<template>
  <div class="bg-green-500 flex justify-center items-center w-screen h-screen">
    <q-btn color="blue" @click="closeDialog('dialog')">Close</q-btn>
  </div>
</template>
