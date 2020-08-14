<!--  -->
<template>
  <div>
    <MainHeader />
  <MainTodo />
  </div>
</template>

<script>
import "./assets/styles/global.css"
import MainHeader from "./components/MainHeader.vue"
import MainTodo from "./components/MainTodo/MainTodo.vue"
export default {
 name:'App',
 components:{
   MainHeader,
   MainTodo
 }
}

</script>
<style scoped>

</style>