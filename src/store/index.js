import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        memberId: '',
    },
    mutations:{
        setMemberId(state, member_id){
            //this.$session.set('member_id', member_id)
            console.log("store is active, member_id = " + member_id)
            state.memberId=member_id;
        },
        destoryMemberid(state){
            state.memberId="";
        },
    },
    getters:{
        getMemberId(state){
            //return this.$session.get('member_id');
            return state.memberId;
        }
    },
})