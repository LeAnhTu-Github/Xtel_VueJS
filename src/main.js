import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
// import store from './store/modules'
import vFocus from "./directive/v-focus";
// import ecommerceStore from './store/ecomerceStore'
import { createPinia } from "pinia";

const app = createApp(App);
app.use(createPinia());
app.directive("focus", vFocus);
app.use(router);
app.mount("#app");
