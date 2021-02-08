<template>
  <div>
      <router-view @handleClickEvent="handelClickMenu" ></router-view>
  </div>
</template>

<script>
export default {
  name:'product-content',
  components: {  },
  data :function(){
    return{
      product_id:'',
    }
  },
  methods:{
    handelClickMenu:function(menuName, par1){
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
        case 'product_order':{
          //주문 logic
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