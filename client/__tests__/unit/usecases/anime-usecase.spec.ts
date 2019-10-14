import AnimeUsecase from "../../../../src/usecases/anime-usecase";
import AnimeRepository from '../../../../src/repositories/anime-repository';

describe('AnimeUsecase', () => {
  const repository = new AnimeRepository();
  const usecase = new AnimeUsecase(repository);

  describe('getList()', () => {
    it('get anime list from repository', async () => {
      const expected: any = [{ title: 'TEST' }];
      const list = jest.spyOn(repository, 'list', 'get').mockReturnValue(expected);
      const saveList = jest.spyOn(repository, 'saveList');

      const actual = await usecase.getList('2019', '3');

      expect(actual).toEqual(expected);
      expect(saveList).toHaveBeenCalledWith('2019', '3');
      expect(list).toHaveBeenCalled();
    });
  });
});