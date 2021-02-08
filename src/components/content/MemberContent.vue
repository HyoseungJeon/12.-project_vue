<template>
  <div>
      <router-view @onClickMenu="handelClickMenu" v-bind="signUpStatus" ></router-view>
  </div>
</template>

<script>
import {Member} from '~/model'
import {Product} from '~/model'
import {MemberApi} from '~/api'
import {ProductApi} from '~/api'
export default {
    name:'member-content',
    components:{

    },
    data:function(){
      return {
        signUpStatus:{
          idCheck : null,
          passwordSizeCheck : null,
          passwordCheck : null,
          nameCheck : null,
          emailCheck : null,
          addressCheck : null,
          modifyStatus : false,
        },
        member : new Member(),
      }
    },
  methods:{
    handelClickMenu:async function(menuName, par1){
      console.log(menuName)
      switch(menuName){
        case 'home':
          this.$router.push({name : 'home'})
          break;

        case 'sign-up-try':{
          let memberObj = par1;
          let status = this.memberCheckUp(memberObj)          
          this.member = this.member.toMember(memberObj)
          if(status){
            await MemberApi.register(this.member)
            this.$router.push({name : 'home'})
          }
          break;
        }
        case 'modify-try':{
          let memberObj = par1;
          let status = this.memberCheckUp(memberObj) 
          
          this.member = this.member.toMember(memberObj)
          if(status){
            await MemberApi.modify(this.member)
            this.signUpStatus.modifyStatus = false;
            console.log(this.signUpStatus.modifyStatus)
          }
          break;
        }

        case 'update-status':{
          let stateName = par1;
          console.log('stateName : ' + stateName)
          switch(stateName){
            case 'member_id':
              this.signUpStatus.idCheck = null
              break;
            case 'password':
              this.signUpStatus.passwordCheck = null
              break;
            case 'password2':
              this.signUpStatus.passwordCheck = null
              break;
            case 'name':
              this.signUpStatus.nameCheck = null
              break;
            case 'email':
              this.signUpStatus.emailCheck = null
              break;
            case 'address':
              this.signUpStatus.addressCheck = null
              break;
          }
          break;
        }

        case 'sell_product':{
          this.$router.push({name : 'member-sell-product'})
          break;
        }

        case 'delete_product' :{
          //let product_id = par1;
          let product_id = 4;
          await ProductApi.delete(product_id);
          this.$router.go({name : 'member-product-list'})
          break;
        }

        case 'sell_product_try':{
          let productObj = par1;
          productObj.member_id = 'test1'
          let product = new Product().toProduct(productObj)
          await ProductApi.register(product);
          this.$router.push({name : 'home'})
          break;
        }

        case 'modify_toogle' :{
          this.signUpStatus.modifyStatus = !this.signUpStatus.modifyStatus;
          break;
        }

        case 'sign_in_try' :{
          let memberObj = par1;
          this.$store.commit('setMemberId',memberObj.member_id);
          console.log(this.$store.state.memberId);
          this.$router.push({name : 'index'})
          break;
        }

        case 'sign_up' :{
          this.$router.push({name : 'member-sign-up'})
          break;
        }
      }
      this.$emit('onClickMenu',menuName)
    },
    memberCheckUp(memberObj){
      let status = true
          this.signUpStatus.passwordCheck = !(memberObj.password === memberObj.password2) ? status = false : null;
          this.signUpStatus.idCheck = memberObj.member_id === '' ? status = false : null;
          this.signUpStatus.nameCheck = memberObj.name === '' ? status = false : null;
          this.signUpStatus.emailCheck = memberObj.email === '' ? status = false : null;
          this.signUpStatus.addressCheck = memberObj.address === '' ? status = false : null;
      return status;
    }
  }
}
</script>

<style>

</style>