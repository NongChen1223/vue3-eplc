<template>
  <div id="threeBody" ref="viewerDom"></div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, type Ref } from "vue";
import Viewer, { type Animate } from "@/modules/Viewer";
import ModelLoader from "@/modules/ModelLoder";
import BoxHelperWrap from "@/modules/BoxHelperWrap";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { log } from "console";

// const camera = ref();
// const renderer = ref();
// const axis = ref();
const viewerDom = ref();
// const scene = ref();
const controls = ref();
onMounted(() => {
  console.log("加载three", THREE);
  init();
});

const init = () => {
  //获取画布dom
  console.log(viewerDom);
  // viewerDom.value = document.getElementById("threeBody") as HTMLElement;
  //创建渲染器
  let renderer = new THREE.WebGLRenderer({
    logarithmicDepthBuffer: true,
    antialias: true, // true/false表示是否开启反锯齿
    // alpha: true, // true/false 表示是否可以设置背景色透明
    precision: "highp", // highp/mediump/lowp 表示着色精度选择
    premultipliedAlpha: true, // true/false 表示是否可以设置像素深度（用来度量图像的分辨率）
    // preserveDrawingBuffer: false, // true/false 表示是否保存绘图缓冲
    physicallyCorrectLights: true, // true/false 表示是否开启物理光照
  });
  renderer.clearDepth();
  viewerDom.value.appendChild(renderer.domElement);

  //创建场景
  let scene = new THREE.Scene();
  //创建相机
  let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  //移动相机
  camera.position.set(5, 5, 10);
  camera.lookAt(0, 0, 0);
  // 添加立方体
  const geometry = new THREE.BoxGeometry(4, 4, 4);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  cube.rotation.y = Math.PI / 4;
  let axis = new THREE.AxesHelper(1000);
  scene.add(axis);

  renderer.render(scene, camera);

  let controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", () => {
    renderer.render(scene, camera);
  });
  controls.enableDamping = false;
  controls.screenSpacePanning = false;
  controls.minDistance = 2;
  controls.maxDistance = 1000;
  controls.update();
};
</script>

<style scoped>
/* #three {
  height: 100%;
  width: 100%;
} */
</style>
