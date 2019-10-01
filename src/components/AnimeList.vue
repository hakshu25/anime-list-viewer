<template>
  <div class="anime">
    <select id="year">
      <option
        v-for="year in years"
        :key="year"
        :value="year"
      >
        {{ year }}
      </option>
    </select>
    <select id="cour">
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
  data: () => {
    return {
      columns: ["title"],
      rows: [],
      years: []
    };
  },
  mounted() {
    this.years = this.createYears();
    // 春アニメ
    const cour = 2;
    this.fetchAnimeList(this.years[0], cour);
  },
  methods: {
    getCour: month => {
      const coursMap = {
        1: [4, 5, 6],
        2: [7, 8, 9],
        3: [10, 11, 12],
        4: [1, 2, 3],
      };
      for (let courStr of Object.keys(coursMap)) {
        if (coursMap[courStr].includes(month)) {
          return parseInt(courStr, 10);
        }
      }
    },
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
      axios
        .get(`http://api.moemoe.tokyo/anime/v1/master/${year}/${cour}`)
        .then(res => {
          this.rows = res.data;
        })
        .catch(e => {
          throw new Error(e);
        });
    },
    displayAnimeList: function() {
      const year = document.getElementById("year").value;
      const cour = document.getElementById("cour").value;
      this.fetchAnimeList(year, cour);
    }
  }
};
</script>

<style scoped>
</style>
