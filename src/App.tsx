import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import Routes from './routes';

// COMPONENTS
import Loader from './components/templates/Loader';
import 'react-toastify/dist/ReactToastify.css';

function App(): React.ReactElement {
  const [loading, setLoading] = React.useState(true);
  const state = useSelector(
    (store: Record<string, unknown>) => store.loading as Record<string, boolean>,
  );

  window.addEventListener('load', () => setLoading(false));
  return (
    <Suspense fallback={<Loader />}>
      { (loading || state) && <Loader />}
      <Routes />
    </Suspense>
  );
}

export default App;
