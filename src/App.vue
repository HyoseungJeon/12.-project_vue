<template>
  <div>
    <div id="app">
      <Header @onClickMenu="handelClickMenu"/>
    </div>
    <Content/>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import './components'
import {Header} from './components'
import {Content} from './components'
import {Footer} from './components'

export default {
  name: 'App',
  data : function(){
    return{
    }
  },
  components:{
    Header,
    Content,
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
