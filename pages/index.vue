<script lang="ts" setup>
import { useProjectStore } from "@/stores/project";

const projectStore = useProjectStore();
projectStore.fetch();
const projects = computed(() => projectStore.list);
</script>

<template>
  <Banner />
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
  <div class="text-center font-bold text-4xl my-10"><span>Recent <span class="text-orange-500">work</span></span></div>
  <Entry v-for="project in projects" :project="project" />
</template>
