import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import LikeNumber from "./components//LikeNumber.vue";

Vue.config.productionTip = false;
Vue.component("LikeNumber", LikeNumber);

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/vue-fire-ffb9d/databases/(default)/documents";

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount("#app");
