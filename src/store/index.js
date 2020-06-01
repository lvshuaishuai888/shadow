import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        number: 0,
        count: 123
    },
    mutations: {
        add (state) {
            state.number++
        },
        addN (state, flag) {
            state.number += flag
        },
        subMum (state) {
            state.count--
        },
        subNum (state, flag) {
            state.count -= flag
        }
    },
    actions: {
        addAsync (context) {
            // 不能直接修改state的数据
            setTimeout(() => {
                context.commit('add')
            }, 1000)
        },
        addNAsync (context, flag) {
            // 不能直接修改state的数据
            setTimeout(() => {
                context.commit('addN', flag)
            }, 1000)
        },
        subMumAsync (context) {
            setTimeout(() => {
                context.commit('subMum')
            }, 1000)
        },
        subNumAsync (context, flag) {
            setTimeout(() => {
                context.commit('subNum', flag)
            }, 1000)
        }
    },
    modules: {
    }
})
