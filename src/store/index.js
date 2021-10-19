//模板
//导入相关方法
import { createStore } from 'vuex'
//创建store对象
const store = createStore({
    //共享数据
    state: {
        count: 5
    },
    //state中的数据需要加工处理
    getters: {

    },
    //同步处理state方法 仅该方法才能直接修改state数据
    mutations: {
        INCREMENT(state) {
            state.count++;
        },
        DEINCREMENT(state) {
            state.count--;
        },

        ASYNINCREMENT(state, num) {
            state.count *= num;
        }
    },
    //只能异步或同步调用mutations中方法
    actions: {
        increment({ commit }) {
            commit('INCREMENT');
        },
        deincrement({ commit }) {
            commit('DEINCREMENT');
        },
        // asynincrement({ commit }) {
        //     commit('ASYNINCREMENT');
        // },
        asynincrement({ commit }, num) {
            setTimeout(() => {
                commit('ASYNINCREMENT', num);
            }, 1000);
        },

    },

});
//以便main.js中通过use调用
export default store;