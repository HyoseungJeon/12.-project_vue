<template>
  <div>
    <h1>주문자 정보</h1>
    <p/>

    <h1>배송지 정보</h1>
    <p/>

    <h1>상품 정보</h1>
    <OrdetListPage/>
    <p/>

    <h1>결제 정보</h1>
    <p/>

    <h1>약관 정보</h1>
    <p/>

    <h1>최종 결제 금액</h1>
    <p/>

    <sui-button id="pay_button" primary fluid size="huge" content="결제하기" 
    @click="onClickMenu('product_order')"/>
  </div>
</template>

<script>
import OrdetListPage from './OrderListPage.vue'
export default {
    data:function(){
        return{
            orderList:[{}],
        }
    },
    components:{
        OrdetListPage,
    },
    methods:{
        onClickMenu:function(menuName){
            this.$emit('handleClickEvent',menuName)
        }
    }
}
</script>

<style>
    #pay_button{
        margin-top: 30px;
    }
</style>