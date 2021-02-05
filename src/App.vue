<template>
  <div>
    <div id="app">
      <Header @onClickMenu="handelClickMenu"/>
    </div>

    <!-- <sui-divider /> -->
    <router-view id="content-form"></router-view>

    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components:{
    Header,
    Footer,
  },
  methods:{
    handelClickMenu:function(menuName){
      console.log(menuName)
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
#content-form{
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
