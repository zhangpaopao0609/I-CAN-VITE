import { changeBodyColor } from "./relativeModule.js";

// 解决依赖的引用
import { createApp } from "vue";

import "../css/index.css";

const app = createApp();
console.log(app);

changeBodyColor();
