import { SitePreviewRepository } from '../../../src/repositories/site-preview-repository';
import axios from 'axios';

jest.mock("axios")

describe('SitePreviewRepository', () => {
  const repository = new SitePreviewRepository();

  describe('getByUrl', () => {
    beforeEach(() => {
      const response = { data: { previewImageUrl: 'http://example.com/hoge.png' } };
      (axios.post as any).mockResolvedValue(response);
    });

    it('return preview image url', async () => {
      const result = await repository.getByUrl('http://example.com');

      expect(result).toEqual('http://example.com/hoge.png');
    });
  })
});