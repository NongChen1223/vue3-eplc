<template>
  <div class="container">
    <!-- <div>
      <router-link to="/login">Login</router-link>
    </div>
    <div>
      <router-link style="margin-left: 30px;" to="/reg">Reg</router-link>
    </div>
    <div class="container__login">
      <router-view></router-view>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
onMounted(() => {
  console.log("嘿嘿嘿");
});
</script>

<style lang="scss" scoped>
.container {
  &__login {
    width: 100%;
    height: 100vh;
  }
}
</style>
