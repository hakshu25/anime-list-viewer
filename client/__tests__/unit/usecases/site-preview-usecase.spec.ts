import { SitePreviewRepository } from "../../../src/repositories/site-preview-repository";
import { SitePreviewUsecase } from '../../../src/usecases/site-preview-usecase';

describe('SitePreviewUsecase', () => {
  const repository = new SitePreviewRepository();
  const usecase = new SitePreviewUsecase(repository);

  describe('getByUrl()', () => {
    it('get site preview image url from repository', async () => {
      const expected: string = 'http://example.com/previewUrl';
      const getByUrl = jest.spyOn(repository, 'getByUrl').mockImplementation(async () => new Promise(resolve => resolve(expected)));

      const actual = await usecase.getByUrl('http://example.com');

      expect(actual).toEqual(expected);
      expect(getByUrl).toHaveBeenCalledWith('http://example.com');
    });
  });
});