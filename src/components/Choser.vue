<template>
  <div class="choser">
    <h1>i am the choser</h1>
  </div>
</template>


<script>
// import elemIndexArrReturner from '../helpers/elemIndexArrReturner'
// const arrLeng = this.todos.length

export default {


  props:{
    todos:Array,
    arrLength: Function,
  }
};
</script>

<style  scoped>
.task {
  padding: 10px;
  border: 1px solid #000;
  background-color: yellowgreen;
}


h1{
  margin-top: 0;
}
</style>