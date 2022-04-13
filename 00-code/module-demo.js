var ModuleA = (function () {
  // 1. 定义一个对象
  var obj = {};
  // 2. 在对象内部添加变量和方法
  obj.flag = true;
  obj.myFunc = function (info) {
    console.log(info);
  };
  return obj;
})();

// 使用 ModuleA
if (ModuleA.flag) {
  console.log("张跑跑可以呀！！");
}

if (ModuleA.myFunc) {
  ModuleA.myFunc("当然比你还是差了点！");
}
