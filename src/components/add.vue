<template>
    <div>
        <p>当前num={{$store.state.number}}</p>
        <button @click="addOne">+1</button>
        <button @click="addAsync">一步+1</button>
        <button @click="addN(4)">+n</button>
        <button @click="addNA(4)">+n异步</button>
    </div>
</template>

<script>
export default {
    data () {
    },
    methods: {
        addOne () {
            this.$store.commit('add')
        },
        addAsync () {
            this.$store.dispatch('addAsync')
        },
        addN (flag) {
            this.$store.commit('addN', flag)
        },
        addNA (flag) {
            this.$store.dispatch('addNAsync', flag)
        }
    }
}
</script>

<style scoped>
</style>
