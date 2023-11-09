<template>
  <div class="container">
    <div class="main">
      <canvas id="board" width="200" height="100"></canvas>
    </div>
    <div class="bottom">123123</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
const board = ref<HTMLElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);

onMounted(() => {
  initBoard();
});
const initBoard = () => {
  board.value = document.getElementById("board")!;
  if (board.value) {
    canvas.value = document.createElement("canvas");
    ctx.value = canvas.value.getContext("2d");
    //创建矩形
    if (ctx.value) {
      ctx.value.fillStyle = "black";
      ctx.value.fillRect(0, 0, 600, 300);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  .board {
  }
}
</style>
