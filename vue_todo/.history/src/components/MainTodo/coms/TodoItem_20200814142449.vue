<!--  -->
<template>
  <div class="todo-item">
      <input type="checkbox" />
      <label >12</label>
      <button></button>
  </div>
</template>

<script>
export default {
    name:"TodoItem"

}

</script>
<style  scoped>
.todo-item{
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
label{
    flex: 1;
}
input{
    width: 50px;
    height: 30px;
    appearance: none;
    border: none;
    outline: none;
}
input::after{
    content:url('~images/yuan.svg')
}
input:checked::after{
    content:url('~images/check.svg')
}
button{
    appearance: none;
}
</style>