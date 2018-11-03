<template>
  <div id="app">
    <AnimeList header="this is anime lists" :lists="lists"/>
  </div>
</template>

<script>
import AnimeList from "./components/AnimeList.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    AnimeList
  },
  data: () => {
    return {
      lists: []
    };
  },
  mounted () {
    axios
    .get("http://api.moemoe.tokyo/anime/v1/master/2018")
    .then(res => (this.lists = res.data))
  }
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
