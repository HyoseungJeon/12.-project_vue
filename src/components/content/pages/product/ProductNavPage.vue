<template>
  <div id="main-form">
    <sui-menu :widths="3">
    <sui-menu-item>상품1</sui-menu-item>
    <sui-menu-item>상품2</sui-menu-item>
    <sui-menu-item :active="false">상품3</sui-menu-item>
  </sui-menu>
  </div>
</template>

<script>
export default {
    name: 'product-nav-page'
}
</script>

<style>
    #main-form{
        text-align: center;
    }
</style>