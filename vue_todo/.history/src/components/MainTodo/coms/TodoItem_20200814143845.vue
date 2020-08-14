<!--  -->
<template>
  <div class="todo-item">
      <input type="checkbox" />
      <label >12</label>
      <button class="btn"></button>
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
.todo-item:hover .btn::after{
    content: 'x';
    font-size: 24px;
    color: #ef2096;
    font-weight: bold;
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
.btn{
    appearance: none;
    border: none;
    outline: none;
    width: 40px;
    background-color:transparent;
}


</style>