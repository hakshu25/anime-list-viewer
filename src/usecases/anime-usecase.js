export default class AnimeUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  getList(year, cour) {
    this.repository.saveList(year, cour);
    return this.repository.list;
  }
}