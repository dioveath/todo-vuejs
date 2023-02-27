<template>
  <main :class="theme">
    <div id="app" class="bg-[#efefef] dark:bg-slate-800 text-black dark:text-white min-h-screen transition-all">
      <NavBar></NavBar>
      <ContentView />
    </div>
  </main>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ContentView from './components/ContentView.vue';
import { mapState } from 'vuex';

export default {
  name: 'TodoApp',
  components: {
    NavBar,
    ContentView
  },
  computed: {
    ...mapState(['theme'])
  }
}
</script>

<style>
#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
