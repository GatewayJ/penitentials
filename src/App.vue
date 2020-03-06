<template>
  <div id="app">
	<my-head></my-head>
	<div class="container"><router-view></router-view></div>
	<my-footer></my-footer>
  </div>
</template>
<script>
import MyHead from '../src/components/Head'
import MyFooter from '../src/components/Footer'
export default {
  name: 'App',
  components:{
	  MyHead,
	  MyFooter
  }
}
</script>

<style>
*{
	margin:0;
	padding:0;
}
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  height:100%;
  width:100%;
  position: relative;
  background-color: #F0EDE3;
}
</style>

