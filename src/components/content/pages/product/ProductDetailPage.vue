<template>
  <div id='body_form'>
      
    <sui-grid divided="vertically">
    <sui-grid-row :columns="2">
      <sui-grid-column>
          <div id='image_form'>
              
          <img src='@/assets/images/item_1.png' width="600" height="600">
          </div>
      </sui-grid-column>
      <sui-grid-column>
          <div>
              <p/>
                <h2>상품 이름</h2>
                <h1>상품 가격</h1>
                <sui-divider />
                <h3 id="align_right">남은 상품 수</h3>
                <h4 id="align_right">{{stock}} </h4>
                <sui-divider />
                <h2>상품 설명</h2>
                <p>
                    - 2020FW 버젼은 Goose Down의 사양 및 Fill-Power 업그레이드<br>
- 다양한 실루엣과 연출을 위해 2way-Zipper로 변경<br>
- 자사에서 개발한 PREMIUM SCOTCH LABEL 부착<br>
<br>
* Reversible Goose Down Short Jacket<br>
* Padding: Goose down 90%, Feathers 10%<br>
* Fabric: Poly 70%, Nylon 30%<br>
* Funnel Neck / Front Zipped Welt Pockets<br>
* Drawstring Hem / Elasticated Cuffs<br>
* Reversible Detail<br>
* Water-proof Zip Fastening<br>
* Sleeve and Chest Zip Detail
                </p>
            <sui-divider />
            <div id="icon_form">
                <h3 id="icon_form">상품 
                    
                </h3>
                <b-form-input id='num_form' size='lg' type="number" :max="stock" :min=1 v-model="num"></b-form-input>
            </div>
            <div fluid id='button_group_order' is="sui-button-group" size="big" >
                <sui-button fluid @click="onClickMenu('product_cart')">장바구니</sui-button>
                <sui-button fluid primary @click="onClickMenu('product_buy')">구매하기</sui-button>
            </div> 
          </div>
          <b-button-group id='button_group_order'>
    </b-button-group>
      </sui-grid-column>
    </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            stock : 3,
            num : 1,
            product_id : '',
        }
    },
    props:{

    },
    methods:{
        onClickMenu:function(menuName){
            this.$emit('handleClickEvent',menuName, this.product_id)
        }
    }
}
</script>

<style>
    #body_form{
        padding: 30px;
    }
    #image_form{
        text-align: center;
    }
    #align_right{
        align-content: right;
        text-align: right;
    }
    #icon_form{
        text-align: right;
        align-content: right;
        
    }
    #num_form{
        text-align: right;
        align-content: right;
    }
    #button_group_order{
        margin-top : 20px;
        margin-bottom : 20px;
        width:max-content;
    }
</style>