<template>
  <div id="app">
    <h1>pomidoro compare</h1>
    <form class="container">
      <label for="">
        <input  type="text">
        <button> OK</button>
      </label>
      
    </form>
    <Choser  />
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
    addTask(){

    }

  },
  data() {
    return {
      count: 0,
      tasks: []
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
