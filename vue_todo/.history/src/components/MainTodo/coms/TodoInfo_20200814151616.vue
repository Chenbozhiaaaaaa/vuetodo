<!--  -->
<template>
  <div>
    <span>1212</span>
    <div>
      <a v-for="(item,index) in states" :key="index">{{item}}</a>
     
    </div>
    <button>445</button>
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
</style>