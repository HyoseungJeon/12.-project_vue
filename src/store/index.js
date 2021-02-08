import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        memberId: '',
    },

    mutations:{
        setMemberId(state, member_id){
            state.memberId = member_id;
        }
    },
    getters:{
        getMemberId(state){
            return state.memberId;
        }
    }
})