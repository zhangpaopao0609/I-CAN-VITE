import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
import "aos/dist/aos.css";
import "normalize.css";

AOS.init();

const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
