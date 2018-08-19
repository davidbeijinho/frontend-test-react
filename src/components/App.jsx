import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Todos from './Todos';
import AddTodo from './AddTodo';
import TodoView from './TodoView';
import NotFound from './NotFound';
import store from '../store';

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Todos} />
          <Route path="/todos/add" component={AddTodo} />
          <Route path="/todo/:id" component={TodoView} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
);

export default App;
