<!--  -->
<template>
  <div class="main-todo">
    <input type="text"
     class="add-todo"
      placeholder="what to do?" 
      autofocus @keyup.enter="addTodo" 
      v-model="content" />
    <TodoItem v-for="(item,index) in todoData" :key="index" :todo="item" @del="handleDeleteItem" />
  </div>
</template>

<script>
import TodoItem from "./coms/TodoItem.vue";
let id = 0
export default {
  name: "MainTodo",
  components: {
    TodoItem,
  },
  data() {
    return {
      todoData: [

      ],
      content:''
    };
  },
  methods:{
    addTodo(){
      if(this.content=='') return
      this.todoData.unshift({
        id:id++,
        content:this.content,
        completed:false
      })
      this.content  = ''
    },
    handleDeleteItem(id){
      this.todoData.splice(this.todoData.findIndex(item=>item.id === id),1)
    }
  }
};
</script>
<style  scoped>
.main-todo {
  width: 600px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 0 5px #666;
}
.add-todo {
  padding: 16px 16px 16px 36px;
  width: 100%;
  font-size: 24px;
  font-weight: inherit;
  font-family: inherit;
  color: inherit;
  border: none;
  outline: none;
  box-sizing: border-box;
}
</style>