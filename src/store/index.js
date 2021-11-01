import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/index.js'

Vue.use(Vuex)

const initialState = () => {
    return {
        items: [],
    }
}

export default new Vuex.Store({
    state: initialState(),
    mutations: {
        SET_GLOBAL_VARIABLE(state, payload) {
          state[payload.var] = payload.value;
        },   
        UPDATE_STATE(state,payload) {
            state[payload.item] = payload.data;
        },
    },
    actions: {
        getItems: async function({ commit }, payload) {
            const res = await api.getData(payload);
            commit('SET_GLOBAL_VARIABLE', { let: "items", value: res.items })
            return res
        },
    }
})