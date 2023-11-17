<template>
  <div>
    <div
      class="flex"
      style="display: flex; background-color: rgb(45, 132, 208)"
    >
      <div class="block">1</div>
      <div class="block">2</div>
      <div class="block">3</div>
      <div class="block">4</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue";
</script>

<style lang="scss" scoped>
.block {
  width: 100px;
  height: 100px;
  display: block;
}
.block:nth-child(1) {
  background-color: #ff4466;
}
.block:nth-child(2) {
  background-color: #42b983;
}
.block:nth-child(3) {
  background-color: #61dafb;
}
.block:nth-child(4) {
  background-color: #ff4466;
}

// .container {
//   margin: 10px;
//   display: flex;
//   width: 100px;
//   height: 200px;
//   background-color: #eee;
//   color: #666;
//   text-align: center;
//   .item {
//     height: 100px;
//   }
//   .a {
//     width: 30px;
//     background-color: #ff4466;
//     flex: 0.4;
//   }
//   .b {
//     width: 30px;
//     background-color: #42b983;
//     // flex: 0;
//   }
//   .c {
//     width: 40px;
//     flex: 1.6;
//     background-color: #61dafb;
//   }
// }
</style>
