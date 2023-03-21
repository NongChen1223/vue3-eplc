import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: () => import("@/view/login.vue"),
  },
  {
    path: "/reg",
    component: () => import("@/view/reg.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
