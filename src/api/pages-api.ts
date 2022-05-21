import { TEST_SERVER } from '../utils/api-constants/server';
import { checkResponse } from '../utils/functions/checkResponse';

class PagesAPI {
  server: string;

  constructor (server: string) {
    this.server = server;
  }

  getPages = async () => {
    return fetch(`${this.server}`)
      .then(checkResponse)
  };
}

export const pagesAPI = new PagesAPI(TEST_SERVER);