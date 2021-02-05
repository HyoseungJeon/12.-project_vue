<template>
  <div id="main-form">
      <b-pagination-nav  :number-of-pages="10" align="center" size="lg"></b-pagination-nav>
  </div>
</template>

<script>
export default {
    name: 'product-page-nav-page'
}
</script>

<style>
    #main-form{
        text-align: center;
        align-content: center;
        padding-bottom: 15px;
    }
</style>