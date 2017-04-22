<template>
  <button class="qui-btn" v-on:click="btnClickEvent">
    <span>{{msg}}</span>
  </button>
</template>

<script>
  export default {
    props: {
      msg: {
        default: '下载'
      }
    },
    methods: {
      btnClickEvent: function(){
        alert(1);
//        this.$emit('btnClickEvent');
      }
    }
  }
</script>
<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-btn.import.css';
</style>



