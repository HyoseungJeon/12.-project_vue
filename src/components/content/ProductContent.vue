<template>
  <div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'product-content',
  components: {  },
  methods:{
    handelClickMenu:function(menuName){
      switch(menuName){
        case 'home':
          this.$router.push({name : 'home'})
          break;
        case 'sign-up-try':{
          //회원가입 로직
          let status = true;
          
          

          if(status){
            this.$router.push({name : 'home'})
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