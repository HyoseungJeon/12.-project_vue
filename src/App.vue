<template>
  <div>
    <div id="app">
      <Header @onClickMenu="handelClickMenu"/>
    </div>

    <sui-divider />
    
    <div>
      <Content/>
    </div>

    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Content from './components/main/Content.vue'
import Header from './components/main/Header.vue'
import Footer from './components/main/Footer.vue'

export default {
  name: 'App',
  components:{
    Content,
    Header,
    Footer,
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
