import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Comments from "../views/Comments.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import HelloWorld from "../components/HelloWorld";
import firebase from "firebase";

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
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        next();
      } else {
        next({
          path: "/login",
          query: { redirect: to.fullPath },
        });
      }
    });
  } else {
    next(); // next() を常に呼び出すようにしてください!
  }
});

export default router;
