<template>
  <div>
      <product-nav-page/>
      상품 리스트 page
      <product-page-nav-page/>
  </div>
</template>

<script>
import ProductNavPage from './ProductNavPage.vue'
import ProductPageNavPage from './ProductPageNavPage.vue'
export default {
  components: { ProductNavPage, ProductPageNavPage },
    name:'product-list-page',
}
</script>

<style>
    #product-list-form{
        text-align: center;
        font-size: 50px;
        margin: 200px;
    }
</style>