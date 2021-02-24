import React from 'react';
import { Link } from 'react-router-dom';

// INTERFACES
import { CardProps } from '../../@types';

// COMPONENTS
import Image from '../atoms/Image';
import Title from '../atoms/Title';

const Card: React.FC<CardProps> = ({
  id,
  name,
  background_image,
  genres,
  platforms,
}: CardProps) => (
  <div className="card">
    <Link to={`/${id as unknown as string}`}>

      <Title type="h3" text={name} />

      <Image
        src={background_image}
      />

      <Title type="h4" text="Gêneros" />
      <p>
        {
            genres?.map((genre) => (
              <span>
                {genre.name}
              </span>
            ))
          }
      </p>

      <Title type="h4" text="Plataformas" />
      <p>
        {
            platforms?.map((platform) => (
              <span>
                {platform.platform.name}
              </span>
            ))
          }
      </p>
    </Link>
  </div>
);

export default Card;
