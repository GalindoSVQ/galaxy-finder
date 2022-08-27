import { fetcher } from '@utilities/fetcher';
import { API } from 'const';
import { Entities, LastSearch, Response } from 'types';

export async function getAllEntities(text: string, id: string): Promise<LastSearch> {
  const results: Array<Response<Entities>> = [];

  for (const path of API.ENTITIES_PATH) {
    const response: Omit<Response<Entities>, 'path'> = await fetcher(`${API.BASE_URL}${path}/?search=${text}`);
    results.push({ ...response, path });
  }

  return { id, text, results };
}
