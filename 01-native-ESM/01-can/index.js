import { consoleMsg } from "./consoleMsg.js";

setTimeout(() => {
  consoleMsg("使用了 consoleMsg.js 中的方法");
}, 3000);

export const changeColor = () => {
  const h1 = document.getElementsByTagName("h1")[0];
  h1.setAttribute("style", "color: red");
};
