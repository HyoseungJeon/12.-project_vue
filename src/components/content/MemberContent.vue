<template>
  <div>
      <router-view @onClickMenu="handelClickMenu" v-bind="signUpStatus"></router-view>
  </div>
</template>

<script>
import {Member} from '~/model'
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
        },
        member : Member,
      }
    },
  methods:{
    handelClickMenu:function(menuName, par1){
      console.log(menuName)
      switch(menuName){
        case 'home':
          this.$router.push({name : 'home'})
          break;
        case 'sign-up-try':{
          let memberObj = par1;
          let status = true
          this.signUpStatus.passwordCheck = !(memberObj.password === memberObj.password2) ? status = false : null;
          this.signUpStatus.idCheck = memberObj.member_id === '' ? status = false : null;
          this.signUpStatus.nameCheck = memberObj.name === '' ? status = false : null;
          this.signUpStatus.emailCheck = memberObj.email === '' ? status = false : null;
          this.signUpStatus.addressCheck = memberObj.address === '' ? status = false : null;
          
          //this.member = this.member.toMember(memberObj)
          if(status){
            //api로 register member
            this.$router.push({name : 'home'})
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
      }
      this.$emit('onClickMenu',menuName)
    }
  }
}
</script>

<style>

</style>