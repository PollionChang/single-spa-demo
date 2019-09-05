import * as singleSpa from "./node_modules/single-spa/lib/esm/single-spa.min.js"


// react init

const loadingFunction = () => import('./react/src/index.js');


// 当url前缀为 /react的时候.返回 true (底层路由)
const activityFunction = location => location.pathname.startsWith('/react');

// 注册应用
singleSpa.registerApplication('react', loadingFunction, ()=>{
  return true
});

//singleSpa 启动
singleSpa.start();
