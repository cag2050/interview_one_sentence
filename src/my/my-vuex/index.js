let _Vue = null

class Store {
    constructor(options) {
        const state = options.state || {}
        const mutations = options.mutations || {}
        const actions = options.actions || {}
        const getters = options.getters || {}

        // 1.实现state 把 state 中的数据转为 响应式,直接用 Vue 中的 observable
        this.state = _Vue.observable(state)

        // 2.实现 getters 这里为什么不直接 把this.getters 赋值 {} 而是 Object.create(null)
        // 好处是不用考虑会和原型链上的属性重名问题
        this.getters = Object.create(null)
        // 我们要为 getters 添加一个 get 方法，这里就要使用 数据劫持
        // 先拿到 getters 中每一个 方法
        Object.keys(getters).forEach((key) => {
            // 第一个参数是给谁添加 ，第二个是添加的属性名，第三个对象里面可以设置很多参数
            // 比如 可枚举，可配置，get，set
            Object.defineProperty(this.getters, key, {
                get: () => {
                    // 还记得吗，getters 中的方法 默认把 state传入进去,改变this指向
                    return getters[key].call(this, this.state)
                },
            })
        })

        // 3.实现 mutations
        // 先遍历 mutaions 中的对象进行改变 this指向
        this.mutations = {}
        Object.keys(mutations).forEach((key) => {
            this.mutations[key] = (params) => {
                mutations[key].call(this, this.state, params)
            }
        })

        // 4.实现 actions
        // 和 mutations 一样我们需要重新改变 this 指向
        this.actions = {}
        Object.keys(actions).forEach((key) => {
            // 改变this指向 ，默认是要传入 store也就是 this
            this.actions[key] = (params) => {
                actions[key].call(this, this, params)
            }
        })
    }

    // 5.实现commit 方法
    // 用于 触发mutations中的方法
    // 第一个参数是事件名 ，第二个是参数
    commit = (eventName, params) => {
        this.mutations[eventName](params)
    }
    // 6.实现 dispatch 方法
    // 用于 触发actions中的异步方法
    // 第一个参数是事件名 ，第二个是参数
    dispatch = (eventName, params) => {
        this.actions[eventName](params)
    }
}

function install(Vue) {
    _Vue = Vue
    _Vue.mixin({
        beforeCreate() {
            // 判断 Vue 传递的对象是否有 store 需要挂载
            // this.$options  是new Vue() 传递的对象
            if (this.$options.store) {
                _Vue.prototype.$store = this.$options.store
            }
        },
    })
}

const mapState = (params) => {
    console.log("mapState 111")
    if (!Array.isArray(params)) {
        throw new Error("抱歉，当前是丐版的Vuex，只支持数组参数")
    }
    let obj = {}
    params.forEach((item) => {
        obj[item] = function () {
            console.log(item)
            return this.$store.state[item]
        }
    })
    console.log("mapState 222")
    return obj
}

const mapMutations = (params) => {
    console.log("mapMutations 111")
    if (!Array.isArray(params)) {
        throw new Error("抱歉，当前是丐版的Vuex，只支持数组参数")
    }
    let obj = {}
    params.forEach((item) => {
        obj[item] = function (params) {
            console.log(item)
            return this.$store.commit(item, params)
        }
    })
    console.log("mapMutations 222")
    return obj
}

const mapActions = (params) => {
    console.log("mapActions 111")
    if (!Array.isArray(params)) {
        throw new Error("抱歉，当前是丐版的Vuex，只支持数组参数")
    }
    let obj = {}
    params.forEach((item) => {
        obj[item] = function (params) {
            console.log(item)
            return this.$store.dispatch(item, params)
        }
    })
    console.log("mapActions 222")
    return obj
}

const mapGetters = (params) => {
    console.log("mapGetters 111")
    if (!Array.isArray(params)) {
        throw new Error("抱歉，当前是丐版的Vuex，只支持数组参数")
    }
    let obj = {}
    params.forEach((item) => {
        obj[item] = function () {
            console.log(item)
            return this.$store.getters[item]
        }
    })
    console.log("mapGetters 222")
    return obj
}

export { mapMutations, mapActions, mapState, mapGetters }

export default {
    install,
    Store,
}
