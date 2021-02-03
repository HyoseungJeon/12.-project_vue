<template>
  <div>
      <product-list-page/>
      //product router view
  </div>
</template>

<script>
import ProductListPage from './pages/product/ProductListPage.vue'
export default {
  components: { ProductListPage },
    name:'product-content',
}
</script>

<style>

</style>