<!--  -->
<template>
  <div class="main-todo">
    <input type="text" class="add-todo" placeholder="what to do?" autofocus @keyup.enter="addTodo" />
    <TodoItem v-for="(item,index) in todoData" :key="index" />
  </div>
</template>

<script>
import TodoItem from "./coms/TodoItem.vue";

export default {
  name: "MainTodo",
  components: {
    TodoItem,
  },
  data() {
    return {
      todoData: [
        {
          id: 0,
          content: "todo1",
          completed: false,
        },
        {
          id: 1,
          content: "todo2",
          completed: false,
        },
      ],
    };
  },
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