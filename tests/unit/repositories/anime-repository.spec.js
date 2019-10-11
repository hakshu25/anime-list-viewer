import AnimeRepository from "../../../src/repositories/anime-repository";
import axios from 'axios';

jest.mock("axios");

describe('AnimeRepository', () => {
  let repository;

  beforeEach(() => {
    repository = new AnimeRepository();
  });

  describe('saveList()', () => {
    it('save anime list', async () => {
      const list = { data: [{ title: 'Anime1'}, { title: 'Anime2' }]};
      axios.get.mockResolvedValue(list);

      await repository.saveList('2019', '3');

      expect(repository.list).toEqual(list.data);
    });
  });
});