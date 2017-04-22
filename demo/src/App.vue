<template>
  <div id="app">
    <h1 :class="test" class="page-title"><a href="http://localhost:8080/#/">开发组件库</a></h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data:function(){
      return {
        test : 'classTest'
      }
    },
    methods:{
      nativeScroll : function(){
        console.log(123);
      }
    },
    mounted:function(){
      var that = this;
      window.onscroll = function(){
        that.test = 'changeTest';
      }
    }
}
</script>

<style scoped>
  @import './assets/css/App.css';
</style>


