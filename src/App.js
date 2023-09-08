import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.css'

import Route from './route/Route';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <main>
      <Provider store={store}>
        <Route />
      </Provider>
    </main>
  );
}

export default App;
