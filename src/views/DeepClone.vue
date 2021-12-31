<template>

</template>

<script>
export default {
    data () {
        return {
            obj: {
                name: 'jeff',
                arr: [1,2,3]
            },
            // obj2: [1,2,3],
        }
    },
    mounted () {
      this.deepClone(this.obj)
    },
    methods: {
        // http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html
        // 四、深拷贝
        deepClone(source, targetParam) {
            let target = targetParam || {}
            for (let key in source) {
                if (typeof source[key] === 'object') {
                    target[key] = (source[key].constructor === Array) ? [] : {}
                    this.deepClone(source[key], target[key])
                } else {
                    target[key] = source[key]
                }
            }
            console.log(target)
            return target
        }
    }
}
</script>

<style scoped>

</style>
