<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link to="/CallApplyBind"
                >call、apply、bind 的区别</router-link
            >
            |
            <router-link to="/MyVuex">MyVuex</router-link>
            |
            <router-link to="/MyVuexUseMap">MyVuexUseMap</router-link>
            |
            <router-link to="/CaptureTargetBubbling"
                >捕获阶段、目标阶段、冒泡阶段</router-link
            >
            |
            <router-link to="/Proxy">Proxy使用</router-link>
            |
            <router-link to="/Object">Object使用</router-link>
            |
            <router-link to="/Reflect">Reflect使用</router-link>
            |
            <router-link to="/Util">Util使用</router-link>
            |
            <router-link to="/Debounce">Debounce防抖</router-link>
            |
            <router-link to="/Throttle">Throttle节流</router-link>
            |
            <router-link to="/DeepClone">DeepClone</router-link>
            |
            <router-link to="/Generator">Generator</router-link>
            |
            <router-link to="/lodash/Throttle">lodash/Throttle</router-link>
        </div>
        <div>---以下是内容---</div>
        <router-view />
    </div>
</template>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
}

#nav {
    //padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
