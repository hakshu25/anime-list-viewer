<template>
  <div class="anime">
    <select
      v-model="selectedYear"
    >
      <option
        v-for="year in years"
        :key="year"
        :value="year"
      >
        {{ year }}
      </option>
    </select>
    <select v-model="cour">
      <option value="2">
        春アニメ
      </option>
      <option value="3">
        夏アニメ
      </option>
      <option value="4">
        秋アニメ
      </option>
      <option value="1">
        冬アニメ
      </option>
    </select>
    <button
      type="button"
      @click="displayAnimeList"
    >
      表示
    </button>
    <v-client-table
      :data="list"
      :columns="columns"
    />
  </div>
</template>

<script>
import axios from "axios";
import AnimeUsecase from '../usecases/anime-usecase.js'

export default {
  name: "AnimeList",
  data: function() {
    return {
      columns: ["title"],
      list: [],
      years: this.createYears(),
      usecase: new AnimeUsecase(),
      selectedYear: '2014',
      cour: '2',
    };
  },
  mounted() {
    this.displayAnimeList();
  },
  methods: {
    createYears: () => {
      const firstYear = new Date("2014").getFullYear();
      const maxYear = new Date().getFullYear();
      const years = [];
      for (let currentYear = firstYear; currentYear <= maxYear; currentYear++) {
        years.push(currentYear);
      }
      return years;
    },
    fetchAnimeList: function(year, cour) {
      return axios
        .get(`http://api.moemoe.tokyo/anime/v1/master/${year}/${cour}`)
        .then(res => {
          this.list = res.data;
        })
        .catch(e => {
          throw new Error(e);
        });
    },
    displayAnimeList: function() {
      this.list = this.usecase.getList(this.selectedYear, this.cour);
    }
  }
};
</script>

<style scoped>
</style>
