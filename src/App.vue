<template>
  <div id="app">
    <h1 class="title">pomidoro compare</h1>
    <div class="content__wrapper">
    <div class="article">
      <AddTodo @add-todo= "addTodo" />
      <TaskList :todos = "todos"/>
    </div>
    <Choser :todos="todos" @change-rating = "ChangeRating"/>
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
 // eslint-disable-next-line no-unused-vars
    ChangeRating(id,count){
      const countLimit = this.todos.length*(this.todos.length-1)/2
      let rating = 0

      for( let item of this.todos){
        if(item.id == id && rating<=countLimit-1 ) {
          item.rating ++
          rating+=item.rating
          console.log(count)
        }
      }



    }

  }
  ,
  data() {
    return {
      count: 0,
      todos: [

        {

        id:0,
        title: 'jojo',
        rating:0
      },{
        id:1,
        title:'dio',
        rating:0
      },{
        id:2,
        title:'kurwa',
        rating:0
      },{
        id: 3,
        title:'lira',
        rating:0
      }


      ]
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
