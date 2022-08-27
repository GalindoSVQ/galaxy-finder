import { fetcher } from '@utilities/fetcher';
import { Entities, Response } from 'types';

export async function getNextPage(nextPage: string | null): Promise<Omit<Response<Entities>, 'path'>> {
  return nextPage ? await fetcher(nextPage) : [];
}
