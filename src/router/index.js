import Vue from "vue"
import Home from "../views/Home.vue"

// 2个router只能使用一个
// 官方vue-router
import VueRouter from "vue-router"
// my-vue-router,自己测试时使用
// import { MyRouter as VueRouter } from "../my/my-vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/CallApplyBind",
        name: "CallApplyBind",
        component: () => import("../views/CallApplyBind.vue"),
    },
    {
        path: "/MyVuex",
        name: "MyVuex",
        component: () => import("../views/my-vuex/MyVuex.vue"),
    },
    {
        path: "/MyVuexUseMap",
        name: "MyVuexUseMap",
        component: () => import("../views/my-vuex/MyVuexUseMap.vue"),
    },
    {
        path: "/CaptureTargetBubbling",
        name: "CaptureTargetBubbling",
        component: () => import("../views/CaptureTargetBubbling.vue"),
    },
    {
        path: "/Proxy",
        name: "Proxy",
        component: () => import("../views/Proxy.vue"),
    },
    {
        path: "/Object",
        name: "Object",
        component: () => import("../views/Object.vue"),
    },
    {
        path: "/Reflect",
        name: "Reflect",
        component: () => import("../views/Reflect.vue"),
    },
    {
        path: "/Util",
        name: "Util",
        component: () => import("../views/Util.vue"),
    },
    {
        path: "/Debounce",
        component: () => import("../views/Debounce.vue"),
    },
    {
        path: "/Throttle",
        component: () => import("../views/Throttle.vue"),
    },
    {
        path: "/DeepClone",
        component: () => import("../views/DeepClone.vue"),
    },
    {
        path: "/Generator",
        component: () => import("../views/Generator.vue"),
    },
    {
        path: "/lodash/Throttle",
        component: () => import("../views/lodash/Throttle"),
    },
]

const router = new VueRouter({
    mode: "history",
    // mode: "hash",
    // abstract模式是使用一个不依赖于浏览器的浏览历史虚拟管理后端
    // mode: "abstract",
    base: process.env.BASE_URL,
    routes,
})

export default router
