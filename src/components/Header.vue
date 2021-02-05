<template>
  <div id="header_form">
    <headerPage @onClickMenu="handelClickMenu"/>
    <signInModal id="signIn_form" @onSignInModalStatus="handleSignInModal" v-bind="propsObj"/>
  </div>
</template>

// logo, 검색창, 장바구니, 회원 정보, 로그인, 회원가입, 로그아웃
<script>
import HeaderPage from './pages/HeaderPage.vue'
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
  methods:{
    handelClickMenu:function(menuName){
      switch(menuName){
        case 'home':
          this.$router.push({name : 'home'})
          break;
        case 'signIn':
          // this.propsObj.signInModalState = !this.propsObj.signInModalState;
          // console.log(this.propsObj.signInModalState)
          this.$router.push({name : 'member-sign-in'})
          break;
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