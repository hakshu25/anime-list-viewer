import AnimeInfoList from '../models/anime-info-list';
import axios from 'axios';

export default class AnimeRepository {
  constructor() {
    this.animeList = undefined;
  }

  get list() {
    return this.animeList.all
  }

  async saveList(year, cour) {
    const list = await this.fetchAnimeList(year, cour);
    this.animeList = new AnimeInfoList(list);
  }

  async fetchAnimeList(year, cour) {
    return axios
        .get(`http://api.moemoe.tokyo/anime/v1/master/${year}/${cour}`)
        .then(res => {
          return res.data;
        })
        .catch(e => {
          throw new Error(e);
        });
  }
}