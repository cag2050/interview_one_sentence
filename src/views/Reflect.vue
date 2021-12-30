<template>
    <div></div>
</template>

<script>
export default {
    mounted() {
        console.log(this)
        this.testReflect()
    },
    methods: {
        testReflect() {
            console.log(Reflect)
        },
    },
}
</script>

<style scoped></style>
