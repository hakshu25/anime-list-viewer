import AnimeRepository from '@/repositories/anime-repository';

export default class AnimeUsecase {
  private repository: AnimeRepository;

  constructor(repository: AnimeRepository) {
    this.repository = repository;
  }

  async getList(year: string, cour: string) {
    await this.repository.saveList(year, cour);
    return this.repository.list;
  }
}