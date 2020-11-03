<template>
  <div class="todo">
    <ul class="todo__list" v-for="(todo, index) in todos" :key="todo.id">
      <li class=" todo__item">
        <span> {{ index }})</span> <span>rating: {{ todo.rating }}</span>
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
  },
};
</script>

<style scoped>
.todo {
  display: flex;
  flex-direction: column;
}

.todo__list {
}
.todo__item {
  display: flex;
  justify-content: flex-start;
}
span {
  margin-right: 10px;
}
</style>
