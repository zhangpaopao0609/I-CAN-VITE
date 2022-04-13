import { changeBodyColor } from "./relativeModule.js";

// 解决依赖的引用
import { createApp } from "vue";

import "../css/index.css";

import App from "../components/test.vue";

createApp(App).mount("#app");

changeBodyColor();
