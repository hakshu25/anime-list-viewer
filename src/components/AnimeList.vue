<template>
  <div class="anime">
    <select v-model="selectedYear">
      <option v-for="year in years" :key="year" :value="year">
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
    <button type="button" @click="displayAnimeList">
      表示
    </button>
    <div>
      <p v-for="l in list" :key="l.id">{{ l.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AnimeUsecase from '../usecases/anime-usecase'
import AnimeRepository from '../repositories/anime-repository';
import { AnimeInfo } from '../models/anime-info-list';

@Component
export default class AnimeList extends Vue {
  columns: string[] = ["title"];
  list: AnimeInfo[] = [];
  years: number[] = this.createYears();
  usecase: AnimeUsecase = new AnimeUsecase(new AnimeRepository());
  selectedYear: string = '2014';
  cour: string = '2';

  mounted() {
    this.displayAnimeList();
  }

  createYears(): number[] {
    const firstYear = new Date("2014").getFullYear();
    const maxYear = new Date().getFullYear();
    const years = [];
    for (let currentYear = firstYear; currentYear <= maxYear; currentYear++) {
      years.push(currentYear);
    }
    return years;
  }

  async displayAnimeList() {
    this.list = await this.usecase.getList(this.selectedYear, this.cour);
  }
}
</script>

<style scoped></style>
