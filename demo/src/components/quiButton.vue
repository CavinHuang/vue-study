<template>
    <button class="qui-btn" v-on:click="btnClickEvent">
      <slot name="icon"></slot>
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
    data: function(){
      return {
        textD : '内置属性'
      }
    },
    methods: {
      btnClickEvent: function(){
        console.log(this.msg);
        this.$emit('btnClickEvent');
      }
    }
  }
</script>
<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-btn.import.css';


</style>



