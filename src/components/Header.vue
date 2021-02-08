<template>
  <div id="header_form">
    <headerPage @onClickMenu="handelClickMenu"/>
    <signInModal id="signIn_form" @onSignInModalStatus="handleSignInModal" v-bind="propsObj"/>

  </div>
</template>

// logo, 검색창, 장바구니, 회원 정보, 로그인, 회원가입, 로그아웃
<script>
import {HeaderPage} from './pages'
import SignInModal from './pages/SignInModal.vue';
export default {
  name : 'Header',
  components: { HeaderPage, SignInModal },
  data:function(){
    return{
      propsObj:{
        testmsg:"123",
        signInModalState : false,
      }
    }
  },
  computed:{
    memberId:{
      get (){
        return this.$store.state.memberId;
      },
      set (value){
        this.$store.commit('setMemberId',value);
      }
    }
  },
  methods:{
    handelClickMenu:function(menuName){
      switch(menuName){
        case 'home':
          this.$router.push({name : 'home'})
          break;
        case 'signIn':
          this.$router.push({name : 'member-sign-in'})
          break;
        case 'signOut':{
          this.$store.commit('setMemberId','');
          console.log(this.$store.state.memberId);
          break;
        }
        case 'signUp':
          this.$router.push({name : 'member-sign-up'})
          break;
        case 'custmer-service':
          this.$router.push({name : 'customer-service'})
          break;
        case 'member-cart':
          this.$router.push({name : 'member-cart'})
          break;
        case 'member-info':
          this.$router.push({name : 'member-info'})
          break;
        case 'member-orderlist':
          this.$router.push({name : 'member-order-list'})
          break;
        case 'member-sell':
          this.$router.push({name : 'member-product-list'})
          break;
        case 'product-search':
          //prop로 검색어 전달
          this.$router.push({name : 'product-list', })
          break;
      }
      this.$emit('onClickMenu',menuName)
    },
    handleSignInModal:function(menuname, par1){
      console.log(menuname)
      switch(menuname){
        case 'signin-try':
          
          this.propsObj.signInModalState = false
          break;
        case 'signin-outBoundary':
          this.propsObj.signInModalState = par1
          break;
      }
    }
  }
}
</script>

<style>
  #header_form{
    text-align: center;
  }
  #signIn_form{
    align-items: center;
  }
</style>