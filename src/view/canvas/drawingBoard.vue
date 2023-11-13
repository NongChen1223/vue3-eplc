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
const moveOn = ref(false);
//路径历史
const pathHistory = ref<any[]>([]);
onMounted(() => {
  createBoard();
  setContext2DStyle();
  initMouse();
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
//绑定鼠标事件
const initMouse = () => {
  canvas.value.addEventListener("mousedown", mouseDown);
  canvas.value.addEventListener("mousemove", mouseMove);
  canvas.value.addEventListener("mouseup", mouseUp);
};
//设置画笔样式
const setContext2DStyle = () => {
  ctx.value = canvas.value?.getContext("2d");
  //画笔颜色
  ctx.value.strokeStyle = "#fff";
  ctx.value.lineWidth = 2;
  ctx.value.lineCap = "round"; //线条两端为圆弧
  ctx.value.lineJoin = "round"; //线条转折为圆弧
};
//鼠标按下事件
const mouseDown = (e) => {
  // console.log("鼠标移动", ctx.value, e);
  moveOn.value = !moveOn.value;
  //如果鼠标按下，记录鼠标按下的位置
  if (moveOn.value) {
    ctx.value.beginPath(); //当你想创建一个新的路径时，调用此方法
    ctx.value.moveTo(e.offsetX, e.offsetY); //将一个新的子路径的起始点移动到 (x，y) 坐标的方法
    ctx.value.stroke(); //绘制已定义的路径
  }
};
//鼠标移动事件
const mouseMove = (e) => {
  if (moveOn.value) {
    ctx.value.lineTo(e.offsetX, e.offsetY);
    ctx.value.stroke();
  }
};
//鼠标抬起事件
const mouseUp = (e) => {
  ctx.value.closePath();
};
</script>

<style lang="scss" scoped>
.container {
  .board {
  }
}
</style>
