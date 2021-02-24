import React from 'react';

// INTERFACES
import { CardsProps } from '../../@types';

// COMPONENTS
import Card from '../molecules/Card';

const Cards: React.FC<CardsProps> = ({ cards }: CardsProps): React.ReactElement => (
  <div className="cards">
    {
      cards?.map((card) => (
        <Card
          id={card.id as unknown as string}
          background_image={card.background_image}
          name={card.name}
          genres={card.genres}
          platforms={card.platforms}
        />
      ))
    }
  </div>
);

export default Cards;
