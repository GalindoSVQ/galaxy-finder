export function fetcher(url: string) {
  try {
    return fetch(url).then((res) => res.json());
  } catch (error) {
    return console.error(`Error in promises ${error}`);
  }
}
