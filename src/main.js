import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChurch,
  faToiletPaper,
  faUserAlt,
  faPhotoVideo,
  faCommentDots,
  faRetweet
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faChurch,
  faToiletPaper,
  faUserAlt,
  faPhotoVideo,
  faCommentDots,
  faHeart,
  faComment,
  faRetweet
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
