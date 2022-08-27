import { Container } from 'components/Card/styles';
import { Film } from 'models/Film';
import { Planet } from 'models/Planet';
import { Species } from 'models/Species';
import { Starships } from 'models/Starships';
import { Vehicle } from 'models/Vehicles';
import { Entities, EntitiesName } from 'types';

type Props = {
  entity: EntitiesName;
  data: Entities;
};

const FilmCard = (data: Film) => {
  return (
    <>
      <h4>{data.title}</h4>
      <span>{data.director}</span>
    </>
  );
};

const PlanetCard = (data: Planet) => {
  return (
    <>
      <h4>{data.name}</h4>
      <span>Population: {data.population}</span>
      <span>Diameter: {data.diameter}</span>
    </>
  );
};

const SpecieCard = (data: Species) => {
  return (
    <>
      <h4>{data.name}</h4>
      <span>{data.language}</span>
    </>
  );
};

const StarshipCard = (data: Starships) => {
  return (
    <>
      <h4>{data.name}</h4>
      <span>Crew: {data.crew}</span>
    </>
  );
};

const VehiclesCard = (data: Vehicle) => {
  return (
    <>
      <h4>{data.name}</h4>
      <span>Model: {data.model}</span>
    </>
  );
};

function Card({ entity, data }: Props) {
  const entitiesCard: Record<string, JSX.Element> = {
    films: FilmCard(data as Film),
    planets: PlanetCard(data as Planet),
    species: SpecieCard(data as Species),
    starships: StarshipCard(data as Starships),
    vehicles: VehiclesCard(data as Vehicle)
  };

  return <Container>{entitiesCard[entity]}</Container>;
}

export { Card };
