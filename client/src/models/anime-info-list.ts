export interface AnimeInfo {
  id: number;
  title: string;
  link: string;
}

export class AnimeInfoList {
  private list: AnimeInfo[];

  constructor(list: AnimeInfo[]) {
    this.list = list;
  }

  get all() {
    return this.list;
  }
}
