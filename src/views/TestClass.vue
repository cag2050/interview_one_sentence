<template>
    <div></div>
</template>

<script>
import People from "../class/People"

export default {
    mounted() {
        let people = new People()
        console.log(people.publicField)
        console.log(people.printName())
    },
}
</script>

<style scoped></style>
