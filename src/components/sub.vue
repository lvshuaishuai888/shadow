<template>
    <div>
        <p>当前num={{count}}</p>
        <button @click="subM">-1</button>
        <button @click="subN">-n</button>
        <button @click="subMA">-1异步</button>
        <button @click="subNA">-n异步</button>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    data () {
        return {
        }
    },
    methods: {
        ...mapMutations(['subMum', 'subNum']),
        ...mapActions(['subMumAsync', 'subNumAsync']),
        subM () {
            this.subMum()
        },
        subN () {
            this.subNum(4)
        },
        subMA () {
            this.subMumAsync()
        },
        subNA () {
            this.subNumAsync(4)
        }
    },
    computed: {
        ...mapState(['count'])
    }
}
</script>

<style scoped>
</style>
