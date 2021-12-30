<template>
    <div>
        <p>触发mousemove事件次数：{{ this.count }}</p>
        <p>执行动作次数：{{ this.times }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 事件执行了几次
            count: 0,
            // 触发事件n秒后执行
            timeoutSeconds: 1,
            // 动作执行了几次
            times: 0,
            // 定时器
            timeout: null,
        }
    },
    mounted() {
        window.addEventListener("mousemove", this.handleEvent, false)
    },
    methods: {
        handleEvent(event) {
            console.log(event)
            this.count++
            this.debounce(this.executeAction, this.timeoutSeconds * 1000)
        },
        debounce(func, wait) {
            // 防抖（Debounce）的核心：每次触发事件，清除定时器，重新计数
            if (this.timeout) {
                clearTimeout(this.timeout)
            }
            this.timeout = setTimeout(() => {
                func()
            }, wait)
        },
        executeAction() {
            console.log(this)
            this.times++
        },
    },
}
</script>

<style scoped></style>
