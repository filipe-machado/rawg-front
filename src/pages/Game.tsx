import React from 'react';

// COMPONENTS
import Details from 'src/components/templates/Details';
import Layout from '../components/templates/Layout';

interface GameProps {
  game: string;
}

const Game: React.FC<GameProps> = ({ game }: GameProps): React.ReactElement => (
  <Layout>
    <Details id={game} />
  </Layout>
);

export default Game;
