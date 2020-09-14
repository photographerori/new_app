import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Comments from "../views/Comments.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Mypage from "../views/Mypage.vue";
import HelloWorld from "../components/HelloWorld";
import firebase from "firebase";
import PremierLeague from "../views/PremierLeague";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
    meta: { requiresAuth: true },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/comment",
    name: "Comments",
    component: Comments,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/premier-league",
    name: "PremierLeague",
    component: PremierLeague,
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: Mypage,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !(await firebase.getCurrentUser())) {
    next({ path: "/singin", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
