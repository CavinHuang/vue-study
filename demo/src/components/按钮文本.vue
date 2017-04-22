<template>
  <button class="qui-btn">
    <span>{{msg}}</span>
  </button>
</template>

<script>
  export default {
    props: {
      msg: {
        default: '下载'/*暴露给外部使用*/
      }
    },
    data : function(){
      return {
        msg : '下载'
      }
    }
  }
</script>
<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-btn.import.css';
</style>



