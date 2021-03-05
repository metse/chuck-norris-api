import fetch from 'node-fetch';
import config from '../config';
import Response from '../utils/responses';

class ChuckNorrisService {
  async fetchAll(): Promise<Response> {
    const response = await fetch(`${config.baseUrl}/jokes/categories`);

    if (response.status === 200) {
      const json = await response.json();
      const categories = json.map((name: string) => ({ name }));
      return new Response(categories, response.status);
    }

    return new Response([], response.status);
  }

  async fetchRandom(category: string): Promise<Response> {
    const response = await fetch(`${config.baseUrl}/jokes/random?category=${category}`);

    if (response.status === 200) {
      const data = await response.json();
      return new Response(data, response.status);
    }

    return new Response('Failed to retrieve random message', response.status);
  }
}

export default ChuckNorrisService;