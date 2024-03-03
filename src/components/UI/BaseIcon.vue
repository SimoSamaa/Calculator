<template>
  <svg
    v-if="name === 'history'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke-linecap="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 8l0 4l2 2" />
    <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
  </svg>
  <!--  -->
  <svg
    v-if="name === 'delete'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
    />
  </svg>
  <!--  -->
  <svg
    v-if="name === 'divide'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke-linecap="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="6" r="1" />
    <circle cx="12" cy="18" r="1" />
    <path d="M5 12l14 0" />
  </svg>
  <!--  -->
  <svg
    v-if="name === 'minus'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke-linecap="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 12l14 0" />
  </svg>
  <!--  -->
  <svg
    v-if="name === 'plus'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke-linecap="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 5l0 14" />
    <path d="M5 12l14 0" />
  </svg>
  <!--  -->
  <svg
    v-if="name === 'equal'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke-linecap="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 10h14" />
    <path d="M5 14h14" />
  </svg>
  <!--  -->
  <svg
    v-if="name === 'dot'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="w-5"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
      stroke-width="0"
      fill="currentColor"
    />
  </svg>
  <!--  -->
  <svg
    v-if="name === 'plus-minus'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke-linecap="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 7h6" />
    <path d="M7 4v6" />
    <path d="M20 18h-6" />
    <path d="M5 19l14 -14" />
  </svg>
</template>

<script setup>
/* eslint-disable */
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
