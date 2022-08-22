<template>
<router-view />
</template>

<script>
/* eslint-disable vue/no-unused-components */
import HelloWorld from './components/HelloWorld.vue'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import DashBoard from './components/DashBoard.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SignUp,
    LogIn,
    DashBoard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
