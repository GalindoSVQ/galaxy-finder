import { fetcher } from '@utilities/fetcher';
import { API } from 'const';
import { Entities, LastSearch, Response } from 'types';

export async function getAllEntities(text: string, id: string): Promise<LastSearch> {
  const data: Array<Response<Entities>> = [];

  for (const entity of API.ENTITIES_PATH) {
    const response: Omit<Response<Entities>, 'path'> = await fetcher(
      `${API.BASE_URL}${entity}/?search=${text.toLowerCase()}`
    );
    data.push({ ...response, entity });
  }

  return { id, text, data };
}
