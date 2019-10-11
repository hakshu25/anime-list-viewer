export default class AnimeInfoList {
  constructor(list) {
    this.list = list;
    this.keys = ["title"];
  }

  get all() {
    return this.list;
  }
}