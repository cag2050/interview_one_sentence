<template>
    <div>
        <ul id="ul1">
            <li id="li1">
                <div id="div1">
                    捕获阶段、目标阶段、冒泡阶段（点击看Console输出）
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    mounted() {
        let html = document.documentElement
        let body = document.body
        let ul1 = document.getElementById("ul1")
        let li1 = document.getElementById("li1")
        let div1 = document.getElementById("div1")

        html.addEventListener("click", this.callback, true)
        body.addEventListener("click", this.callback, true)
        ul1.addEventListener("click", this.callback, true)
        li1.addEventListener("click", this.callback, false)
        div1.addEventListener("click", this.callback, false)
    },
    methods: {
        callback(event) {
            let target = event.currentTarget
            console.log(target.tagName)
            switch (target.tagName) {
                case "BODY":
                    // 阻止之后的捕获、目标、冒泡
                    // event.stopPropagation()
                    break
                default:
            }
        },
        callbackDiv(event) {
            let target = event.currentTarget
            console.log(target.tagName)
        },
    },
}
</script>

<style scoped></style>
