<!--  -->
<template>
  <div :class="['todo-item',todo.compalted?'compalted':'']">
    <input type="checkbox" />
    <label>{{todo.content}}</label>
    <button class="btn"></button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props:{
      todo:Object
  }
};
</script>
<style  scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 24px;
  border-top: 1px solid rgb(0,0,0,.1);
}
.todo-item:hover .btn::after {
  content: "x";
  font-size: 24px;
  color: #ef2096;
  font-weight: bold;
}
label {
  flex: 1;
  transition: color 0.4s;
  font-style: inherit;
}
.compalted {
  color: #d9d9d9;
  text-decoration: line-through;
}
input {
  width: 50px;
  height: 30px;
  appearance: none;
  border: none;
  outline: none;
  text-align: center;
}
input::after {
  content: url("~images/yuan.svg");
}
input:checked::after {
  content: url("~images/check.svg");
}
.btn {
  appearance: none;
  border: none;
  outline: none;
  width: 40px;
  background-color: transparent;
  cursor: pointer;
}
</style>