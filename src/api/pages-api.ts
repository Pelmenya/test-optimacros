import { TEST_SERVER } from '../utils/api-constants/server';
import { checkResponse } from '../utils/functions/checkResponse';

class PagesAPI {
  server: string;

  constructor (server: string) {
    this.server = server;
  }

  getPages = async () => {
    const res = await fetch(`${this.server}`);
    return checkResponse(res);
  };
}

export const pagesAPI = new PagesAPI(TEST_SERVER);
