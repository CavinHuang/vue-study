
<template>
  <div class="mod-module mod-parallel">
    <div class="img-list type-full">
      <div class="img-box">
        <p class="img-item">
          <a class="page-link" href="#/btn">按钮</a>
        </p>
      </div>
      <div class="img-box">
        <p class="img-item">
          <a class="page-link" href="#/list">列表</a>
        </p>
      </div>
      <div class="img-box">
        <p class="img-item">
          <a class="page-link" href="#/nav">导航</a>
        </p>
      </div>
      <div style="display: none;" class="img-box" v-on:click="doSth">
        <p class="img-item">
          <a class="page-link" >导航</a>
        </p>
      </div>
      <div class="img-box" style="display: none;">
        <p v-for="(log, index) in logs">
          <span>{{log}}</span>
        </p>
      </div>
    </div>
    <!--<btn class="small"></btn>-->
  </div>
</template>

<script>
  import Vue from 'vue'
  import util from '../plugins/util.vue'
  Vue.prototype.util = util;
  export default{
    data:function(){
      return {
        logs:this.util.arryUtil
      }
    },
    methods:{
      doSth:function(){
        this.util.arryUtil.push(5);
      }
    }
  }
</script>

<style scoped>
 @import './css/index.css';
</style>
