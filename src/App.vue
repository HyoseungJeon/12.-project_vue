<template>
  <div>
    <div id="app">
      <Header @onClickMenu="handelClickMenu"/>
    </div>

    <sui-divider />
    <product-content> router view</product-content>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/main/Header.vue'
import Footer from './components/main/Footer.vue'
import ProductContent from './components/main/content/ProductContent.vue'

export default {
  name: 'App',
  components:{
    Header,
    Footer,
    ProductContent
  },
  methods:{
    handelClickMenu:function(menuName){
      switch(menuName){
        case 'signUp':
          //해당 page route
          break;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
