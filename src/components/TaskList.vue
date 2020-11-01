<template>
  <div class="todo">
    <ul class="todo__list" v-for="todo in todos" :key=" todo.id" >
      <li class=" todo__item" > {{todo.title}} </li>

    </ul>

  </div>
</template>


<script>
export default {
  props:{
    todos:Array
  }
}
</script>


<style scoped>
.todo{
  display: flex;
  flex-direction: column;
}


.todo__list{

}
.todo__item{
  display: flex;
  justify-content: flex-start;
}
</style>