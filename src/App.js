import 'react-loading-skeleton/dist/skeleton.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.css'

import { useEffect } from 'react';
import RouteApp from './route/Route';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  useEffect(() => {
    document.title = 'SIMS PPOB-TRI WIBOWO'
  }, [])
  return (
    <main>
      <Provider store={store}>
        <RouteApp />
      </Provider>
    </main>
  );
}

export default App;
