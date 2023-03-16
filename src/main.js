import { createApp, onMounted } from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css";
import "./assets/css/index.css";

createApp(App).use(router).mount("#app");
