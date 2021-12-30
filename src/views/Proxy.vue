<template>
    <div></div>
</template>

<script>
export default {
    mounted() {
        this.testProxy()
    },
    methods: {
        testProxy() {
            let obj = {
                name: "张三",
            }
            let proxy = new Proxy(obj, {
                get(target, property, receiver) {
                    console.log("Proxy get()")
                    console.log(receiver)
                    if (property in target) {
                        return target[property]
                    } else {
                        throw new Error("没有这个key")
                    }
                },
            })
            console.log(proxy.name)
            console.log(proxy.age)
        },
    },
}
</script>

<style scoped></style>
