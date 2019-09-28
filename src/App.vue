<template>
  <div id="app">
    <AnimeList />
  </div>
</template>

<script>
import AnimeList from "./components/AnimeList.vue";

export default {
  name: "App",
  components: {
    AnimeList
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
