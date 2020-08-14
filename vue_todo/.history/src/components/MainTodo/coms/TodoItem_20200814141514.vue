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
}
</style>