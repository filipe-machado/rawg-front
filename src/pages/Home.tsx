import React from 'react';

// COMPONENTS
import Layout from '../components/templates/Layout';
import Presentation from '../components/templates/Presentation';

const Home = (): React.ReactElement => (
  <Layout logo="https://duckduckgo.com/i/3585ebbe.png">
    <Presentation />
  </Layout>
);

export default Home;
