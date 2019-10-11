export default class AnimeUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async getList(year, cour) {
    await this.repository.saveList(year, cour);
    return this.repository.list;
  }
}