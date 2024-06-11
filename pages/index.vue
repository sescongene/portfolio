<script lang="ts" setup>
import { useProjectStore } from "@/stores/project";

const projectStore = useProjectStore();
projectStore.fetch();
const projects = computed(() => projectStore.list);
const devIcons = [
  "devicon:laravel-wordmark",
  "devicon:amazonwebservices-wordmark",
  "devicon:php",
  "devicon:react-wordmark",
  "devicon:vuejs-wordmark",
  "devicon:nuxtjs-wordmark",
  "devicon:typescript",
  "devicon:javascript",
  "devicon:tailwindcss",
  "devicon:docker-wordmark",
  "devicon:mysql-wordmark",
  "devicon:nodejs-wordmark",
  "devicon:wordpress"
];
</script>

<template>
  <Banner />
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
  <div class="text-center font-bold text-4xl my-10">
    <span>Recent <span class="text-orange-500">work</span></span>
  </div>
  <Entry v-for="project in projects" :project="project" />
  <div class="text-center font-bold text-4xl my-10">
    <span>Tech <span class="text-orange-500">Stack</span></span>
  </div>
  <div class="flex flex-wrap justify-center">
    <Icon
      v-for="(item, index) in devIcons"
      :key="index"
      :name="item"
      class="m-5"
      size="100"
    />
  </div>
</template>
