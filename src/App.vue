<template>
  <div id="app">
    <Choser :tasks="logger()" />
  </div>
</template>

<script>
import Choser from "./components/Choser";
export default {
  name: "App",
  components: {
    Choser,
  },
  methods: {
    logger() {
      let currElem = 0;
      let nextElem = currElem + 1;
      if (this.count === 0) {
        return [this.tasks[0], this.tasks[1]];
      } else {
        return [...this.tasks];
      }
    },
  },
  data() {
    return {
      count: 0,
      tasks: ["jotaro", "joseph", "joske"],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
