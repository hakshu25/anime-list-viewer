<template>
  <div class="anime">
    <select id="year">
      <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
    </select>
    <select id="cour">
      <option value="1">春アニメ</option>
      <option value="2">夏アニメ</option>
      <option value="3">秋アニメ</option>
      <option value="4">冬アニメ</option>
    </select>
    <button type="button" v-on:click="displayAnimeList">表示</button>
    <v-client-table :data="rows" :columns="columns"></v-client-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AnimeList",
  data: () => {
    return {
      columns: ["title"],
      rows: [],
      years: []
    };
  },
  methods: {
    getCourInfo: month => {
      const cours = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
      let index = cours.findIndex(v => {
        return v[0] <= month && month <= v[2];
      });
      return ++index;
    },
    createYears: () => {
      const minDate = new Date('2014');
      const firstYear = minDate.getFullYear();
      const maxDate = new Date();
      const through = maxDate.getFullYear() + 1 - firstYear;
      const years = [];
      for (let i = firstYear, length = firstYear + through; i < length; i++) {
        years.push(i);
      }
      return years;
    },
    fetchAnimeList: function(year, cour) {
      axios
        .get(`http://api.moemoe.tokyo/anime/v1/master/${year}/${cour}`)
        .then(res => {
          this.rows = res.data;
        })
        .catch(e => { throw new Error(e)});
    },
    displayAnimeList: function () {
        const year = document.getElementById('year').value;
        const cour = document.getElementById('cour').value;
        this.fetchAnimeList(year, cour);
    }
  },
  mounted() {
    this.years = this.createYears();
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const cour = this.getCourInfo(month);
    this.fetchAnimeList(year, cour);
  }
};
</script>

<style scoped>
</style>
