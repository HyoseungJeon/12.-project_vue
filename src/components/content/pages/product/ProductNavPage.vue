<template>
  <div id="main-form" >
    <sui-menu :widths="productNum" pointing secondary>
      <sui-menu-item 
      v-for="(categorie,index) in productCategorieList" 
      v-bind:key="index"
      :active="isActive(categorie.categorie)"
      @click="onClickCategorie(categorie.categorie)"
      >
        {{categorie.categorie}}
      </sui-menu-item>
    </sui-menu>
  </div>
</template>

<script>
export default {
    name: 'product-nav-page',
    data: function(){
      return{
        categorieName : '상의',
        productNum : 3,
        productCategorieList : [
          {
          categorie : '상의',
          },
          {
          categorie : '하의',
          },
          {
          categorie : '악세사리',
          },
        ],
      }
    },
    props:{
      categorie : String
    },
    methods:{
      isActive(name){
        return this.categorieName === name;
      },
      onClickCategorie(name){
        this.categorieName = name;
        this.$emit('onClickCategorie', name)
      }
    }
}
</script>

<style>
    #main-form{
        text-align: center;
    }
    #menu_form{
      padding: 10px;
    }
</style>