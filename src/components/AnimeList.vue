<template>
  <div class="anime">
    <select ref="year">
      <option
        v-for="year in years"
        :key="year"
        :value="year"
      >
        {{ year }}
      </option>
    </select>
    <select ref="cour">
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
      :data="rows"
      :columns="columns"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AnimeList",
  data: function() {
    return {
      columns: ["title"],
      rows: [],
      years: this.createYears()
    };
  },
  mounted() {
    // 春アニメ
    const cour = 2;
    this.fetchAnimeList(this.years[0], cour);
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
          this.rows = res.data;
        })
        .catch(e => {
          throw new Error(e);
        });
    },
    displayAnimeList: function() {
      this.fetchAnimeList(this.$refs.year.value, this.$refs.cour.value);
    }
  }
};
</script>

<style scoped>
</style>
