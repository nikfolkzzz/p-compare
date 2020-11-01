<template>
      <form class="container add-todo" @submit.prevent = "AddTodo" >
      <label for="">
        <input  type="text" v-model="title" >
        <button @click="AddTodo"> OK</button>
      </label>
      
    </form>

</template>


<script>

export default {
  data(){
    return {
      title:''
    }
  },
  methods: {
    AddTodo(){
      this.$emit("add-todo",this.title)
      this.title = ''
    }
  },


}
</script>

<style scoped>

.add-todo{
width: 50%;
float:left
}
</style>

