import axios from 'axios';

interface Response {
  previewImageUrl: string;
}

export class SitePreviewRepository {
  async getByUrl(url: string): Promise<string> {
    return axios.post<Response>('http://localhost:3000/api/anime_site_previews', { link_url: url })
    .then(res => {
      return res.data.previewImageUrl;
    }).catch((e: string) => {
      throw new Error(e);
    });
  }
}