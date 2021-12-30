<template>
    <div>
        <div>
            测试此页面，需要打开src/main.js文件中的注释：`import store from
            "./store/my_vuex_index";`
        </div>
        <hr />
        <h1>我是 state 测试：{{ this.$store.state.name }}</h1>
        <h1>我是 getters 测试:{{ this.$store.getters.decorationName }}</h1>
        <button @click="$store.commit('changeName', 'mutations 按钮')">
            mutations 按钮
        </button>
        <button @click="$store.dispatch('changeNameAsync', 'actions 按钮')">
            actions 按钮
        </button>
    </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
