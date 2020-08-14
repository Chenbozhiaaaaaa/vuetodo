<!--  -->
<template>
  <div class="todo-info">
    <span class="total">1212</span>
    <div class="tabs">
      <a v-for="(item,index) in states" :key="index">{{item}}</a>
     
    </div>
    <button class="clear">445</button>
  </div>
</template>

<script>
export default {
    name:"TodoInfo",
  data() {
    return {
        states:['all','active','completed']
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style scoped>
.todo-info{
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    padding: 5px 10px;
    line-height: 30px;
}
</style>