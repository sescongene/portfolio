<script lang="ts" setup>
import { useProjectStore } from "@/stores/project";

useHead({
  title: 'Full-Stack Developer Portfolio | Laravel, Vue, Nuxt, React Expert',
  meta: [
    { name: 'description', content: 'Welcome to my portfolio! I am an expert in Laravel, Vue, Nuxt, and React development, specializing in building dynamic web applications with seamless performance and cutting-edge technologies. Explore my work and get in touch to transform your digital presence today!' },
    { name: 'keywords', content: 'Laravel development, Vue.js expert, Nuxt.js developer, React development, dynamic web applications, frontend development, backend development, full-stack developer, modern web technologies, performance optimization, digital transformation, web development portfolio, custom web solutions, user interface design, interactive web apps, progressive web apps, responsive design, JavaScript frameworks, cutting-edge web development.'  }
  ]
})

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
