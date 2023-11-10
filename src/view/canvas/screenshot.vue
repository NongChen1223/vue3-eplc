<template>
  <div class="container">
    <div class="item a">
      <p>A</p>
      <!-- <p>width:10</p> -->
    </div>
    <div class="item b">
      <p>B</p>
      <!-- <p>width:50</p> -->
    </div>
    <div class="item c">
      <p>C</p>
      <!-- <p>width:10</p> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue";
</script>

<style lang="scss" scoped>
.container {
  margin: 10px;
  display: flex;
  width: 100px;
  height: 200px;
  background-color: #eee;
  color: #666;
  text-align: center;
  .item {
    height: 100px;
  }
  .a {
    width: 30px;
    background-color: #ff4466;
    flex: 0.4;
  }
  .b {
    width: 30px;
    background-color: #42b983;
    // flex: 0;
  }
  .c {
    width: 40px;
    flex: 1.6;
    background-color: #61dafb;
  }
}
</style>
