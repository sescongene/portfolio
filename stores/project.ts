import { defineStore } from "pinia";

export const useProjectStore = defineStore("todo", {
  state: () => {
    return {
      fetching: false,
      list: [],
    };
  },
  actions: {
    async fetch() {
      this.fetching = true;
      const response = await fetch("https://api.genesescon.com/api/projects");
      const projects = await response.json();
      this.list = projects.data;
      this.fetching = false;
    },
  },
});
