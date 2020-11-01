<template>
  <div id="app">
    <h1 class="title">pomidoro compare</h1>
    <div class="content__wrapper">
    <div class="article">
      <AddTodo @add-todo= "addTodo" />
      <TaskList :todos = "todos"/>
    </div>
    <Choser :todos="todos" :arrLength = "arrLangReturner" />
    </div>
  </div>
</template>

<script>
import Choser from "./components/Choser";
import AddTodo from './components/AddTodo'
import TaskList from './components/TaskList'


export default {
  name: "App",
  components: {
    Choser,
    AddTodo,
    TaskList
  },
  methods: {
    addTodo(title){
      const task = {id: Date.now(),
                    title: title,
                    rating: 0}

      if (task.title !== ''){
              this.todos.push(task)
}
    },

    arrLangReturner(){
      console.log(this.todos.length)
      return this.todos.length
    }
  }
  ,
  data() {
    return {
      count: 0,
      todos: [{
        title: 'jojo'
      },{
        title:'dio'
      }]
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
.article{
  width: 50%;
  display: flex;
  flex-direction: column;
}

.title{
  width: 100%;
}

.content__wrapper{
    display:  flex;
  /* flex-direction: column; */
}
</style>
