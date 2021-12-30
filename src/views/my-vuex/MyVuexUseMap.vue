<template>
    <div>
        <div>
            测试此页面，需要打开src/main.js文件中的注释：`import store from
            "./store/my_vuex_index";`
        </div>
        <hr />
        <h1>我是 state 测试：{{ name }}</h1>
        <h1>我是 getters 测试:{{ decorationName }}</h1>
        <button @click="changeName('mutations 按钮')">mutations 按钮</button>
        <button @click="changeNameAsync('actions 按钮')">actions 按钮</button>
    </div>
</template>

<script>
import {
    mapGetters,
    mapState,
    mapActions,
    mapMutations,
} from "../../my/my-vuex/index"

export default {
    methods: {
        ...mapActions(["changeNameAsync"]),
        ...mapMutations(["changeName"]),
    },
    computed: {
        ...mapState(["name"]),
        ...mapGetters(["decorationName"]),
    },
}
</script>

<style scoped></style>
