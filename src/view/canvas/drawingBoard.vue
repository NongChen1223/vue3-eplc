<template>
  <div class="container">
    <div class="main">
      <div
        ref="board"
        style="border: 1px solid red; width: 200px; height: 100px"
      ></div>
    </div>
    <div class="bottom">123123</div>
  </div>
</template>

<script setup lang="ts">
import { fa } from "element-plus/es/locale";
import { ref, reactive, toRefs, onMounted } from "vue";
const board = ref<HTMLElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const startX = ref(0);
const startY = ref(0);
//路径历史
const pathHistory = ref<any[]>([]);
onMounted(() => {
  createBoard();
  // mouseDown();
  console.log("画布", board.value);
});
//创建画布
const createBoard = () => {
  canvas.value = document.createElement("canvas");
  canvas.value.width = board.value.clientWidth;
  canvas.value.height = board.value.clientHeight;
  canvas.value.style.display = "block";
  canvas.value.style.backgroundColor = "#000";
  board.value.appendChild(canvas.value);
  canvas.value.addEventListener("mousedown", mouseDown);
};
//鼠标按下事件
const mouseDown = (e) => {
  console.log("鼠标移动", e);
  ctx.value = canvas.value?.getContext("2d");
  // 11
  ctx.value?.beginPath(e.offsetX, e.offsetY);
  ctx.value.stroke();
};
</script>

<style lang="scss" scoped>
.container {
  .board {
  }
}
</style>
