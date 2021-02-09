<template>
  <div id="product_list_main_form">
      <product-ad-page/>
      <div>
        <product-nav-page @onClickCategorie="handleClickCategorie" v-bind="productCategorie"/>
        <h2 id="product_empty_h2" v-show="isEmptyList">! 등록된 상품이 없습니다 !</h2>
        <div id='product_list_form'>
        <sui-card-group :items-per-row="4">
          <sui-card v-for="(product,index) in productList" v-bind:key="index"
          @click="onClickProduct('product_click',product.product_id)"
          >
            <div>
            <!-- <sui-image id='sui_image_form' src="static/images/wireframes/image.png" /> -->
            <img src='@/assets/images/defalut_image.png' width="339" height="339">
            </div>
            <sui-card-content>
              <h4 id='product_name_form'>{{product.product_name}}</h4>
              <p>{{product.price}}</p>
            </sui-card-content>
          </sui-card>
        </sui-card-group>
        </div>

        <product-page-nav-page />
      </div>
  </div>
</template>

<script>
import ProductAdPage from './ProductAdPage.vue'
import ProductNavPage from './ProductNavPage.vue'
import ProductPageNavPage from './ProductPageNavPage.vue'
import {ProductApi} from '~/api'
export default {
  components: { ProductNavPage, ProductPageNavPage, ProductAdPage },
    name:'product-list-page',
    mounted:async function()  {
      //router에서 검색어 입력받음, 해당 값 기준으로 검색 후 리스트를 set 없으면 초기값 list set
      this.productList = await ProductApi.findProductByNameLike('');
    },
    data: function(){
      return{
        productCategorie : {
          categorie : ''
        },
        productList:[
          
        ],
      }
    },
    methods:{
      handleClickCategorie:function(productCategorie){
        this.productCategorie.categorie = productCategorie
        //해당 categorie 기준 상품 재검색 및 리스트에 로드
      },
      onClickProduct:function(menuName, product_id){
        this.$emit('handleClickEvent',menuName, product_id)
      }
    },
    computed:{
      isEmptyList:function(){
        return this.productList.length === 0 ? true : false;
      }
    }
}
</script>

<style>
    #product_list_form{
      padding : 50px;
    }
    #sui_image_form{
      padding: 10px;
      width: auto;
      height: auto;
    }
    #product_list_body_form{
      align-content: center;
    }

    #product_list_main_form{
      background-color: rgb(248, 248, 248);
    }
  #product_name_form{
    font-weight: bold;
    color: black;
  }

  #product_empty_h2{
    text-align: center;
  }

</style>