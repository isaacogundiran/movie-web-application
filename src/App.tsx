import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies/:id" component={MovieDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
