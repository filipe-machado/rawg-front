import React from 'react';

// COMPONENTS
import Layout from '../components/templates/Layout';
import Presentation from '../components/templates/Presentation';

interface HomeProps {
  props?: unknown;
}

const Home: React.FC<HomeProps> = ({ props }: HomeProps): React.ReactElement => {
  console.log(props);
  return (
    <Layout logo="https://duckduckgo.com/i/3585ebbe.png">
      <Presentation />
    </Layout>
  );
};

Home.defaultProps = {
  props: null,
};

export default Home;