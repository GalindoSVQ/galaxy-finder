import { API } from 'const';
import { Film } from 'models/Film';
import { Planet } from 'models/Planet';
import { Species } from 'models/Species';
import { Starships } from 'models/Starships';
import { Vehicle } from 'models/Vehicles';

export interface AccordionData {
  title: string;
  content: JSX.Element;
  show: boolean;
}

export type EntitiesName = typeof API.ENTITIES_PATH[number];
export type Entities = Planet | Film | Species | Starships | Vehicle;
export interface Response<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
  entity: EntitiesName;
}

export interface LastSearch {
  id: string;
  text: string | null;
  data: Array<Response<Entities>>;
}
