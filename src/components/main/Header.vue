<template>
  <div id="header_form">
    <headerPage @onClickMenu="handelClickMenu"/>
    <signInModal v-bind="propsObj"/>
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
        case 'signIn':
          this.propsObj.signInModalState = !this.propsObj.signInModalState;
          break;
      }
      this.$emit('onClickMenu',menuName)
    }
  }
}
</script>

<style>
  #header_form{
    text-align: center;
  }
</style>