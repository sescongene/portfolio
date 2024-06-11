<script lang="ts" setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
const { project } = props;
</script>

<template>
  <div class="my-10">
    <div class="grid grid-cols-3 gap-10 items-start mt-10 mb-5">
      <div class="col-span-1">
        <div class="flex">
          <div class="w-10 mr-5 pt-2">
            <Icon
              v-if="project.type == 'web'"
              name="mdi:web"
              color="#f97316"
              size="40"
            />
            <Icon
              v-if="project.type == 'mobile'"
              name="material-symbols-light:phone-android"
              color="#f97316"
              size="40"
            />
            <div class="text-xs text-center capitalize mt-2 font-light">
              {{ project.type }}
            </div>
          </div>
          <div>
            <div class="text-5xl font-semibold">{{ project.name }}</div>
            <div class="text-base uppercase font-light mt-2">
              {{ project.role }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div class="text-2xl font-semibold">Project Description</div>
        <div class="text-lg font-light my-3">
          {{ project.description }}
        </div>
        <UBadge
          v-for="tag in project.tags"
          v-bind:key="tag"
          color="red"
          class="mr-2"
          variant="solid"
          >{{ tag }}</UBadge
        >
        <div class="mt-5">
          <ULink
            v-if="project.url"
            :href="project.url"
            target="_blank"
            class="mr-5"
            ><Icon
              name="material-symbols:arrow-outward-rounded"
              color="#f97316"
              size="25"
            />
            View Project</ULink
          >
        </div>
      </div>
    </div>
    <div v-for="image in project.image" class="images">
      <img :src="image.original_url" class="max-w-3xl mx-auto" />
    </div>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
  </div>
</template>

<style scoped></style>
