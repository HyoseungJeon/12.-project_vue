<template>
  <div id='order_list_form'>
      <sui-item-group divided>
    <sui-item>
      <img src='@/assets/images/item_1.png' width="300" height="300">
      <sui-item-content id="order_list_content_form">
          <h2>상품명</h2>
          <h4>가격</h4>
          <h4>상품 개수</h4>
        <sui-item-description>
          <p>
            상품 설명
          </p>
        </sui-item-description>
      </sui-item-content>
    </sui-item>
    <sui-divider/>
  </sui-item-group>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            orderIdList:[],
        }
    },
}
</script>

<style>
    #order_list_form{
        padding: 50px;
    }
    #order_list_content_form{
        padding-left: 50px;
        padding-right: 50px;
    }
</style>