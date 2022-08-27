import { LastSearch } from 'types';

export function fillLastSearchs() {
  const state = Array(3).fill({});
  for (const [indexOf] of state.entries()) {
    state[indexOf] = {
      id: indexOf.toString(),
      text: null,
      results: []
    };
  }

  return state as LastSearch[];
}
