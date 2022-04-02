<template>
    <div></div>
</template>

<script>
import { throttle } from "lodash-es"

export default {
    data() {
        return {
            throttleFunc: throttle(this.handleEvent, 2 * 1000, {
                leading: true,
                trailing: true,
            }),
            timestamp: new Date().getTime(),
        }
    },
    mounted() {
        window.addEventListener("mousemove", this.throttleFunc)
    },
    methods: {
        handleEvent() {
            console.log("隔", new Date().getTime() - this.timestamp, "ms")
            console.log("执行了")
            this.timestamp = new Date().getTime()
        },
    },
}
</script>

<style scoped></style>
