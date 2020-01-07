<template>
  <div class="anime">
    <select v-model="selectedYear">
      <option
        v-for="year in years"
        :key="year"
        :value="year"
      >
        {{ year }}
      </option>
    </select>
    <select v-model="cour">
      <option value="1">
        冬アニメ
      </option>
      <option value="2">
        春アニメ
      </option>
      <option value="3">
        夏アニメ
      </option>
      <option value="4">
        秋アニメ
      </option>
    </select>
    <button
      type="button"
      @click="displayAnimeList"
    >
      表示
    </button>
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          v-for="(l, i) in list"
          :key="i"
          cols="4"
          md="4"
          sm="12"
        >
          <v-card
            class="mx-auto"
          >
            <v-card-text>
              <p class="display-1 text--primary">
                {{ l.title }}
              </p>
            </v-card-text>
            <v-card-actions>
              <a
                v-if="l.link"
                :href="l.link"
                target="blank"
              >公式サイト</a>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
