<template>
  <div>
      <h1>장바구니</h1>
      <OrderListPage v-bind="order"/>
  </div>
</template>

<script>
import {OrderListPage} from '../product'
import {OrderApi} from '~/api'
export default {
    mounted:async function(){
        this.$store.state.memberId
        this.order.orderList = await OrderApi.findByMemberIdAndState('test1','cart');
    },
    components:{
        OrderListPage,
    },
    data:function(){
        return{
            order:{
                orderList:[],
            }
        }
    }
}
</script>

<style>
</style>