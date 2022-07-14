import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/books",
    name: "books-list",
    component: () => import("./components/BookList")
  },
  {
    path: "/books/fav",
    name: "books-fav",
    component: () => import("./components/FavBooks")
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;