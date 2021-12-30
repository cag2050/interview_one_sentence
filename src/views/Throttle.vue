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
            // 不断触发事件，每n秒执行1次
            timeoutSeconds: 2,
            // 动作执行了几次
            times: 0,
            // 周期执行
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
            this.throttle(this.executeAction, this.timeoutSeconds * 1000)
        },
        throttle(func, wait) {
            // 节流（Throttle）的核心：当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。
            if (!this.timeout) {
                this.timeout = setTimeout(() => {
                    this.timeout = null
                    func()
                }, wait)
            }
        },
        executeAction() {
            console.log(this)
            this.times++
        },
    },
}
</script>

<style scoped></style>
