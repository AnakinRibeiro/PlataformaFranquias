import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './components/auth/Login.css';
import './components/layout/Navbar.css';
import './components/dashboard/Dashboard.css';
import './components/manuais/Manuais.css';
import './components/marketing/apresentacoes/Apresentacoes.css';

// Components
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Manuais from './components/manuais/Manuais';
import PrivateRoute from './components/routing/PrivateRoute';
import ManuaisUpload from './components/manuais/ManuaisUpload';
import Apresentacoes from './components/marketing/apresentacoes/Apresentacoes';
import ApresentacoesUpload from './components/marketing/apresentacoes/ApresentacoesUpload';
import MateriaisGraficos from './components/marketing/materiais_graficos/MateriaisGraficos';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path='/' component={Login} />
          <section className='container'>
            <Switch>
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/manuais' component={Manuais} />
              <PrivateRoute
                exact
                path='/manuais-upload'
                component={ManuaisUpload}
              />
              <PrivateRoute
                exact
                path='/apresentacoes'
                component={Apresentacoes}
              />
              <PrivateRoute
                exact
                path='/apresentacoes-upload'
                component={ApresentacoesUpload}
              />
              <PrivateRoute
                exact
                path='/materiais-graficos'
                component={MateriaisGraficos}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
