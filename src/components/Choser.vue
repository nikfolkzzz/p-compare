<template>
  <div class="choser">
    <h1>i am the choser</h1>
    <div class="task" v-for="task in tasks" :key="task">
      {{ task }}
    </div>
  </div>
</template>


<script>
export default {
  props: {
    tasks: Array,
  },
};
</script>

<style  scoped>
.task {
  padding: 10px;
  border: 1px solid #000;
  background-color: yellowgreen;
}
</style>