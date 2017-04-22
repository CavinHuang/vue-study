<template>
  <button class="qui-btn" v-on:click="btnClickEvent">
    <transition name="textShow">
      <span v-if="showText">{{msg}}</span>
    </transition>
    <transition appear name="defaultTrans">
      <span >测试</span>
    </transition>
  </button>
</template>

<script>
  export default {
    props: {
      msg: {
        default: '下载'
      }
    },
    data:function(){
      return {
        showText : true
      }
    },
    methods: {
      btnClickEvent: function(){
        this.showText = !this.showText;
        console.log(this.showText);
        this.$emit('btnClickEvent');
      }
    }
  }
</script>
<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-btn.import.css';
  .textShow-enter-active, .textShow-leave-active {
    transition: opacity .5s
  }
  .textShow-enter,.textShow-leave-active{
    opacity: 0;
  }
  .defaultTrans-enter-active, .defaultTrans-leave-active {
    transition: opacity 5s
  }
  .defaultTrans-enter,.defaultTrans-leave-active{
    opacity: 0;
  }
</style>



