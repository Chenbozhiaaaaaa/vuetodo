<!--  -->
<template>
  <div>
    <MainHeader />
  <MainTodo />
  <MainFooter />
  </div>
</template>

<script>
import "./assets/styles/global.css"
import MainHeader from "./components/MainHeader.vue"
import MainFooter from "./components/MainFooter.vue"
import MainTodo from "./components/MainTodo/MainTodo.vue"
export default {
 name:'App',
 components:{
   MainHeader,
   MainTodo,
   MainFooter
 }
}

</script>
<style scoped>

</style>