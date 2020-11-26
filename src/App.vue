<template>
  <v-app id="app">
    <!--路由管道标签，任何符合某一路由(route)信息的组件都会在这个标签内展示出来 -->
    <v-main>
      <router-view/>
    </v-main>
    <!-- <router-view></router-view> -->
  </v-app>
</template>

<script> 
export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
