<template>
  <div class="choser">
    <h1>i am the choser</h1>

    <div class="tasks">
      <div class="task"
        v-for="item in BatlerReturner()"
        :key="item.id"
        @click="choseBatler(todos[item].id)"

          >

        {{todos[item].title}}

      </div>
    </div>
  </div>
</template>


<script>
import elemIndexArrReturner from '../helpers/elemIndexArrReturner'
// const arrLeng = this.todos.length

export default {

  data(){
    return {
      count: 0
    }
  },
  props:{
    todos:Array,
  },
  methods: {
    BatlerReturner(){
        return elemIndexArrReturner(this.todos.length)[this.count]
    },
    choseBatler(id){
      const arrLeng = this.todos.length
      const countLimit = arrLeng*(arrLeng-1)/2 - 1
      if(this.count <= countLimit -1 ){
        this.count ++
      }

      this.$emit('change-rating',id,this.count)




    }
  }
};
</script>

<style  scoped>
.task {
  padding: 10px;
  border: 1px solid #000;
  background-color: yellowgreen;
  margin-bottom: 20px;
  /* transition: .4s ; */
  position: relative;
}

.task:first-child::after{
content: 'VS';
position: absolute;
transform: translateY(30px);
}

.tasks{
  display: flex;
  flex-direction: column;
}


h1{
  margin-top: 0;
}
</style>
