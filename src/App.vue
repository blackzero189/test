<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<van-button type="primary">主要按钮</van-button>
	<van-button type="info">信息按钮</van-button>
	<van-button type="default">默认按钮</van-button>
	<van-button type="warning">警告按钮</van-button>
	<van-button type="danger">危险按钮</van-button>
	<van-button round type="info" size="large">确认</van-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.van-button--primary {
    color: #fff;
    background-color: #ee0a24;
    border: 1px solid #ee0a24;
}
.van-button--large {
    width: 50%;
    height: 50px;
}
</style>
