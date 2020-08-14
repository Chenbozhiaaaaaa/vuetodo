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
  name: "TodoInfo",
  props:{
      total:Number
  },
  data() {
    return {
      states: ["all", "active", "completed"],
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style scoped>
.todo-info {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  padding: 5px 10px;
  line-height: 30px;
  border-top: 1px solid rgb(0, 0, 0, 0.1);
  color: #ef2096;
}
.tabs {
  display: flex;
  justify-content: space-between;
  width: 200px;
}
.tabs a{
      padding: 2px 5px;
  border: 1px solid #ef2096;
  border-radius: 5px;
  cursor: pointer;
}
.actived {
  background-color: #ef2096;
  color: #fff;
}
.clear {
  background-color: #ef2096;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0 10px;
}
</style>