<template>
  <div id="footer_form">
    <sui-divider />
    <sui-container fluid>
    <img id="logo_form" src='@/assets/images/plateer_logo.png' width="180" height="45">
    <!-- <div>
      <sui-icon id="icon_form" size="big" name="phone icon"></sui-icon>
      <h2 is="sui-header">15881818</h2>
    </div> -->
    
    <p>
      PLATEER  |  주소 : 서울시 송파구 법원로9길 26 H Business Park D동 6층  |  Tel. 02-554-4668  |  Fax. 02-554-4583
    </p>
    <p>
      Copyright ⓒ 2020 PLATEER. All rights reserved.
    </p>
  </sui-container>
  </div>
</template>

//회사소개, 고객센터 tab, 회사 정보
<script>
export default {
    name : 'footerPage',
}
</script>

<style>
  #footer_form{
    background-color: black;
    color:white;
    padding: 10px;
    padding-bottom: 30px;
  }
  #logo_form{
    margin-bottom: 15px;
  }
</style>