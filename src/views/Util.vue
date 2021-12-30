<template>
    <div></div>
</template>

<script>
import { spread } from "../util/util"

export default {
    mounted() {
        this.testSpread()
    },
    methods: {
        callback1(x, y, z) {
            console.log(x)
            console.log(y)
            console.log(z)
        },
        testSpread() {
            // 以下2行代码，执行结果相同
            this.callback1(1, 2, 3)
            spread(this.callback1)([1, 2, 3])
        },
    },
}
</script>

<style scoped></style>
