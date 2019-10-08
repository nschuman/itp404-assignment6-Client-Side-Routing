import React from 'react';
import AnimalPage from './AnimalPage'
import PageNotFound from './PageNotFound';
import AuthorDetails from './AuthorDetails'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <h1>Animal threads</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/animals/cats">
                Cats
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals/chickens">
                Chickens
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals/cows">
                Cows
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals/dogs">
                Dogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals/pigs">
                Pigs
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/animals/:animal" component={AnimalPage}/>
          <Route path="/authors/:author" component={AuthorDetails} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
