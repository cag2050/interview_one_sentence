import Vue from "vue"
import App from "./App.vue"
import router from "./router"

// 2个store只能使用一个
// 官方Vuex
import store from "./store"
// my-vuex,自己测试时使用
// import store from "./store/my_vuex_index"

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app")
