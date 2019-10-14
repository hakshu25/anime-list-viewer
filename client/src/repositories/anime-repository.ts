import { AnimeInfo, AnimeInfoList } from '../models/anime-info-list';
import axios from 'axios';

export default class AnimeRepository {
  private animeList: AnimeInfoList | undefined;

  constructor() {
    this.animeList = undefined;
  }

  get list() {
    return this.animeList!.all;
  }

  async saveList(year: string, cour: string) {
    const list = await this.fetchAnimeList(year, cour);
    this.animeList = new AnimeInfoList(list);
  }

  private async fetchAnimeList(year: string, cour: string): Promise<AnimeInfo[]> {
    return axios
        .get(`http://api.moemoe.tokyo/anime/v1/master/${year}/${cour}`)
        .then(res => {
          return res.data;
        })
        .catch((e: string) => {
          throw new Error(e);
        });
  }
}