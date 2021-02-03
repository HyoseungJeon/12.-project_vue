<template>
    <div>
        <product-content> router view</product-content>
    </div>
</template>

//상품 내용,
<script>
import ProductContent from './content/ProductContent.vue'
export default {
    name : 'Content',
    components: { ProductContent,},
}
</script>

<style>
    #content_form{
        text-align: center;
        margin: 15px;
    }
</style>