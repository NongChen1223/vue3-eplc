<template>
  <div class="container-canvas">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
onMounted(() => {
  console.log("13123");
});
</script>

<style lang="scss" scoped>
.container-canvas {
}
</style>
