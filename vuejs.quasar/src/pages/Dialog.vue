<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="bg-red-500 text-center w-screen h-screen flex justify-center items-center text-2xl">
    <q-btn color="blue" @click="router.push('/')">Home</q-btn>
  </div>
</template>
