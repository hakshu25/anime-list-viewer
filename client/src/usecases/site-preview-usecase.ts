import { SitePreviewRepository } from '../repositories/site-preview-repository';

export class SitePreviewUsecase {
  private repository: SitePreviewRepository;

  constructor(repository: SitePreviewRepository) {
    this.repository = repository;
  }

  async getByUrl(siteUrl: string) {
    const url = await this.repository.getByUrl(siteUrl);
    return url;
  }
}