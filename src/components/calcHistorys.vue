<template>
  <li class="py-4">
    <p>{{ props.historyCalc }}</p>
    <p>= {{ props.historyResult }}</p>
  </li>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted } from "vue";

const props = defineProps({
  historyCalc: String,
  historyResult: String,
});
</script>
