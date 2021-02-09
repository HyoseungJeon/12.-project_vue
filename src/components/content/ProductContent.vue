<template>
  <div>
      <router-view @handleClickEvent="handelClickMenu" ></router-view>
  </div>
</template>

<script>
import {OrderApi} from '~/api'
import {Order} from '~/model'
export default {
  name:'product-content',
  components: {  },
  data :function(){
    return{
      product_id:'',
    }
  },
  methods:{
    handelClickMenu:async function(menuName, par1){
      let memberId = this.$store.getters.getMemberId
      switch(menuName){
        case 'home':
          this.$router.push({name : 'home'})
          break;
        case 'product_click':{
          this.product_id = par1;
          this.$router.push({name : 'product-detail'})
          break;
        }
        case 'product_buy' :{
          this.$router.push({name : 'product-order'})
          break;
        }
        case 'product_cart':{
          //Order(product_id, member_Id, count, state, address)
          await OrderApi.register(new Order(5,memberId, 1, 'cart', 'address'))

          //modal 띄우고 사용자에게 해당 상품 페이지에 머물것인지 홈으로 갈것인지 물어보고 결정
          this.$router.push({name : 'home'})
          break;
        }
        case 'product_order':{
          //주문 logic
          //Order(product_id, member_Id, count, state, address)
          await OrderApi.register(new Order(5,memberId, 1, 'wait', 'address'))

          this.$router.push({name : 'home'})
          break;
        }
      }
      this.$emit('onClickMenu',menuName)
    }
  }
}
</script>

<style>

</style>