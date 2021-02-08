<template>
  <div>
    <b-button id='b-button' variant="primary" size="lg" @click="handleClickMenu('sell_product')">등록하기</b-button>
      <div id='order_list_form'>
      <sui-item-group divided>
    <sui-item>
      <img src='@/assets/images/defalut_image.png' width="300" height="300">
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
      <b-button id='b-button' variant="" size="lg" @click="handleClickMenu('delete_product','product_id')">삭제</b-button>
    </sui-item>
    <sui-divider/>
  </sui-item-group>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        handleClickMenu(menuName){
            this.$emit('onClickMenu',menuName)
        }
    }
}
</script>

<style>
    #order_list_form{
        padding: 50px;
    }
</style>