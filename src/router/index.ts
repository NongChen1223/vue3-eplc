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
  {
    path: "/three",
    component: () => import("@/view/three.vue"),
  },
  {
    path: "/canvas",
    component: () => import("@/view/canvas/index.vue"),
    children: [
      {
        path: "screenshot",
        component: () => import("@/view/canvas/screenshot.vue"),
      },
      {
        path: "drawingBoard",
        component: () => import("@/view/canvas/drawingBoard.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
