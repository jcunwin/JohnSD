// Modules
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Styles
import './assets/scss/style.scss';

// Contexts
import { CategoryContext, CategoryProvider } from './contexts/category-context';

// Pages
import Index from './pages/index';
import Service from './pages/service';

class App extends Component {
  render() {
    return (
      <CategoryProvider>
        <CategoryContext.Consumer>
          {categoryContext => (
            <Router basename="/fsd-spike">
              <Fragment>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Index categoryContext={categoryContext} {...props} />
                  )}
                />
                <Route
                  path="/service/:id"
                  render={props => (
                    <Service categoryContext={categoryContext} {...props} />
                  )}
                />
              </Fragment>
            </Router>
          )}
        </CategoryContext.Consumer>
      </CategoryProvider>
    );
  }
}

export default App;
