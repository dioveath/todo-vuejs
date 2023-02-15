<template>
  <div id="app">
    <NavBar></NavBar>
    <ContentView/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ContentView from './components/ContentView.vue';

export default {
  name: 'TodoApp',
  components: {
    NavBar,
    ContentView
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
