<template>
  <div>
    <b-button id='b-button' variant="primary" size="lg" @click="handleClickMenu('sell_product')">등록하기</b-button>
      <div id='order_list_form'>
      <sui-item-group divided>
      <h2 v-if="emptyList">등록된 상품이 없습니다</h2>
    <sui-item v-for="(product,index) in product_list" v-bind:key="index">
      <img src='@/assets/images/defalut_image.png' width="300" height="300">
      <sui-item-content id="order_list_content_form">
          <h2>상품명 : {{product.product_name}}</h2>
          <h4>가격 : {{product.price}}</h4>
          <h4>재고수 : {{product.quantity}}</h4>
        <sui-item-description>
          <p>
            상품소개 : {{product.product_intro}}
          </p>
        </sui-item-description>
      </sui-item-content>
      <b-button id='b-button' variant="" size="lg" @click="handleClickMenu('delete_product','{{product.product_id}}')">삭제</b-button>
    </sui-item>
    <sui-divider/>
  </sui-item-group>
    </div>
  </div>
</template>

<script>
//import {Product} from '~/model'
import {ProductApi} from '~/api'
export default {
  data:function(){
    return{
      product_list : []
    }
  },
  mounted: async function(){
    this.product_list = await ProductApi.findProductByMemberId(this.$store.state.memberId)
  },
    methods:{
        handleClickMenu(menuName){
            this.$emit('onClickMenu',menuName)
        }
    },
    computed:{
      emptyList:function(){
        return this.product_list.length === 0 ? true : false;
      }
    }
}
</script>

<style>
    #order_list_form{
        padding: 50px;
    }
</style>