export interface AnimeInfo {
  id: number;
  city_code: number;
  city_name: string;
  cours_id: number;
  created_at: string;
  product_companies: string;
  public_url: string;
  sequel: number;
  sex: number;
  title: string;
  title_short1: string;
  title_short2: string;
  title_short3: string;
  twitter_account: string;
  twitter_hash_tag: string;
  updated_at: string;
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
