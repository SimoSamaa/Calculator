<template>
  <li class="py-4">
    <p>{{ props.historyCalc }}</p>
    <p class="font-semibold">= {{ props.historyResult }}</p>
  </li>
</template>

<script setup>
/* eslint-disable */
const props = defineProps({
  historyCalc: String,
  historyResult: String,
});
</script>
