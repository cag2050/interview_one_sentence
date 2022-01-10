<template>
    <div>
        <p>触发mousemove事件次数：{{ this.count }}</p>
        <p>执行动作次数：{{ this.times }}</p>
    </div>
</template>

<script>
// https://github.com/mqyqingfeng/Blog/issues/22
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
            // console.log(event)
            this.count++
            let result = this.debounce(this.executeAction, this.timeoutSeconds * 1000, true)('xyz')
            console.log('handleEvent result')
            console.log(result)
        },
        debounce(func, wait, immediate) {
            let result;
            let _this = this
            // 防抖（Debounce）的核心：每次触发事件，清除定时器，重新计数
            return function(...args) {
                if (_this.timeout) {
                    clearTimeout(_this.timeout)
                }
                if (immediate) {
                    // 如果已经执行过，不再执行
                    let callNow = !_this.timeout;
                    _this.timeout = setTimeout(function(){
                        _this.timeout = null;
                    }, wait)
                    if (callNow) {
                        // 只在 immediate 为 true 的时候返回函数的执行结果
                        result = func.apply(_this, args)
                    }
                } else {
                    this.timeout = setTimeout(() => {
                        func.apply(_this, args)
                    }, wait)
                }
                return result
            }
        },
        executeAction(param) {
            this.times++
            return param
        },
    },
}
</script>

<style scoped></style>
