<template>
  <div id='order_list_form'>
      <sui-item-group divided>
    <sui-item v-for="(order,index) in orderList" v-bind:key="index">
      <img src='@/assets/images/defalut_image.png' width="300" height="300">
      <sui-item-content id="order_list_content_form">
          <h2>{{order.product.product_name}}</h2>
          <h4>{{order.product.price}}</h4>
          <h4>{{order.count}}</h4>
        <sui-item-description>
          <p>
            {{order.product.product_intro}}
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
    props:{
      orderList:[]
    }
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