<template>
    <div>
        <vue-markdown> ### call、apply、bind 的区别 </vue-markdown>
        <vue-markdown>
            1. call、apply、bind都是改变this指向的方法 2. bind
            返回的是一个新的函数，你必须调用它才会被执行 3. call
            的参数是直接放进去的，第二第三第n个参数全都用逗号分隔，直接放到后面
            4. apply 的所有参数都必须放在一个数组里面传进去 5. bind
            除了返回是函数以外，它的参数和 call 一样
        </vue-markdown>
        <vue-markdown>
            > 出处：https://www.runoob.com/w3cnote/js-call-apply-bind.html
        </vue-markdown>
    </div>
</template>

<script>
import VueMarkdown from "vue-markdown-v2"

export default {
    components: {
        VueMarkdown,
    },
    data () {
        return {
            obj: {
                'abc': 123
            }
        }
    },
    mounted() {
        this.execTest()
    },
    methods: {
        test() {
            console.log("testCall() this")
            console.log(this)
        },
        execTest() {
            this.test.call(this.obj)
            this.test.call(this)
        }
    }
}
</script>

<style scoped></style>
