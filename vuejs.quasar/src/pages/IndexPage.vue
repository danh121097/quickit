<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div
    class="bg-yellow-400 text-center w-screen h-screen flex justify-center items-center text-2xl"
  >
    <q-btn color="red" @click="router.push('/dialog')">Dialog</q-btn>
  </div>
</template>
