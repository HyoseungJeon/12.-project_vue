<template>
  <div>
    <div id="menu_form">
      <a id="icon_form" @click="handelClickMenu('signIn')"> 로그인</a>
      <a id="icon_form" @click="handelClickMenu('signUp')"> 회원가입</a>
      <a id="icon_form" @click="handelClickMenu('custmer-service')"> 고객센터</a>
    </div>
    <div id="header_form">
      <img src='@/assets/images/H_icon.png' width="80" height="80"
      @click="handelClickMenu('home')">
      <div id=search_form class="ui left icon action input" >
        <i class="search icon"></i>
        <input type="text" placeholder=" 찾고 싶은 상품명을 입력해주세요!" />
        <div class="ui blue submit button"
        @click="handelClickMenu('product-search')"
        >검색</div>
      </div>
      <!-- <img src='@/assets/images/icon_cart.png' width="50" height="40">
      <img src='@/assets/images/icon_myinfo.png' width="50" height="40"> -->
      <sui-icon id="icon_form" size="big" name="shopping cart icon"
        @click="handelClickMenu('member-cart')"/>
      <sui-icon id="icon_form" size="big" name="user icon" 
        @click="handelClickMenu('member-info')"/>
    </div>
  </div>
  
</template>

// logo, 검색창, 장바구니, 회원 정보, 로그인, 회원가입, 로그아웃
<script>
export default {
    name : 'headerPage',
    methods:{
        handelClickMenu:function(menuName){
          this.$emit('onClickMenu',menuName)
        }
    }
}
</script>

<style>
#header_form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
}
#menu_form{
  margin-top: 10px;
  text-align: right;
  font-size: 9px;
}
#search_form{
  width: 400px;
  height: 50px;
  margin-left: 40px;
  margin-right: 20px;
}
#icon_form{
  margin-left: 10px;
  margin-right: 10px;
}
</style>