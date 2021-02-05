<template>
  <div>
      <product-ad-page/>
      <div id='product_list'>
      <product-nav-page/>
      상품 리스트 page
      <product-page-nav-page/>
      </div>
  </div>
</template>

<script>
import ProductAdPage from './ProductAdPage.vue'
import ProductNavPage from './ProductNavPage.vue'
import ProductPageNavPage from './ProductPageNavPage.vue'
export default {
  components: { ProductNavPage, ProductPageNavPage, ProductAdPage },
    name:'product-list-page',
}
</script>

<style>
    #product_list{
    }
</style>