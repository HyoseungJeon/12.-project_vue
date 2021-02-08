<template>
  <div>
      <h1>상품 등록</h1>
        <form>
            <b-form-group label="상품명">
                <b-form-input size='lg' type="text" v-model="productObj.product_name"
                ></b-form-input>
                <b-form-text>6~20 글자</b-form-text>
            </b-form-group>
            <b-form-group label="상품 소개">
                <b-form-input size='lg' type="text" v-model="productObj.product_intro"
                ></b-form-input>
                <b-form-text>6~100 글자</b-form-text>
            </b-form-group>
            <b-form-group label="카테고리">
                <b-form-input size='lg' type="text" v-model="productObj.categories"
                ></b-form-input>
                <b-form-text>6~20 글자</b-form-text>
            </b-form-group>
            <b-form-group label="재고수">
                <b-form-input size='lg' type="text" v-model="productObj.quantity"
                ></b-form-input>
                <b-form-text>1개 이상 입력</b-form-text>
            </b-form-group>
            <b-form-group label="가격">
                <b-form-input size='lg' type="text" v-model="productObj.price"
                ></b-form-input>
                <b-form-text>100원 이상 입력</b-form-text>
            </b-form-group>
            
            <b-button id='b-button' variant="primary" size="lg" @click="handleClickMenu('sell_product_try')">등록하기</b-button>
        </form>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      productObj:{
        product_name : '',
        product_intro : '',
        categories : '',
        quantity : '',
        price : '',
      }
    }
  },
  methods:{
    handleClickMenu(menuName){
      if(menuName === 'sell_product_try'){
        this.$emit('onClickMenu',menuName,this.productObj)
      }
    }
  }
}
</script>

<style>

</style>