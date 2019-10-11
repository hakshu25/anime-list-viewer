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
import AnimeUsecase from '../usecases/anime-usecase'
import AnimeRepository from '../repositories/anime-repository';

export default {
  name: "AnimeList",
  data: function() {
    return {
      columns: ["title"],
      list: [],
      years: this.createYears(),
      usecase: new AnimeUsecase(new AnimeRepository()),
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
    displayAnimeList: async function() {
      this.list = await this.usecase.getList(this.selectedYear, this.cour);
    }
  }
};
</script>

<style scoped>
</style>
