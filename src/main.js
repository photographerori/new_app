import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import LikeNumber from "./components//LikeNumber.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.component("LikeNumber", LikeNumber);

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount("#app");
