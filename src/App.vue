<template>
  <router-view />
</template>

<script setup>
import { useAppStore } from '@/store/app';
const currencyStore = useAppStore();
currencyStore.fetchRates();
</script>
