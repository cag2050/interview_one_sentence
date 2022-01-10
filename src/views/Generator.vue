<template>
    <div></div>
</template>

<script>
export default {
    mounted() {
        let generator = this.gen(1)
        console.log(generator)
        console.log(Object.prototype.toString.call(generator))
        let next1 = generator.next()
        console.log(next1)
        let next2 = generator.next()
        console.log(next2)
    },
    methods: {
        * gen(x) {
            let result = yield x + 1
            return result
        }
    }
}
</script>

<style scoped>

</style>
