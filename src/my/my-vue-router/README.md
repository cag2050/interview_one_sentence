## Vue Router的原理
### 一、Vue Router的mode是history时：
1. 当执行window.history.pushState()方法、点击router-link组件等的时候，修改当前路径（当时路径是响应式），Vue更新router-view组件

### 二、Vue Router的mode是hash时：
1. window.addEventListener绑定了hashchange事件，当hash改变时，修改当前路径（当时路径是响应式），Vue更新router-view组件

### 三、Vue Router的mode是abstract时：
1. abstract模式是使用一个不依赖于浏览器的浏览历史虚拟管理后端。
2. 根据平台差异可以看出，在 Weex 环境中只支持使用 abstract 模式。 不过，vue-router 自身会对环境做校验，如果发现没有浏览器的 API，vue-router 会自动强制进入 abstract 模式，所以 在使用 vue-router 时可以不写 mode 配置，默认会在浏览器环境中使用 hash 模式，在移动端原生环境中使用 abstract 模式。 （当然，你也可以明确指定在所有情况下都使用 abstract 模式）

资料 | 网址
--- | ---
手写一个简易版的 vue-router（支持 history 和 hash） | https://blog.csdn.net/qq_39953537/article/details/105582336
