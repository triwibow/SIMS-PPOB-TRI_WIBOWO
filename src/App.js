import 'react-loading-skeleton/dist/skeleton.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.css'


import RouteApp from './route/Route';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <main>
      <Provider store={store}>
        <RouteApp />
      </Provider>
    </main>
  );
}

export default App;
