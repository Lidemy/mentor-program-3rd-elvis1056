/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './nav';
import Home from './article/home';
import About from './about/about';
import Articles from './article/article';
import ArticlePage from './article/articlePage';

class App extends Component {
  constructor() {
    super();
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  render() {
    return (
      <div>
        <div className="container">
          <Router>
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/articles" exact component={Articles} />
              <Route path="/articles/:id" component={ArticlePage} />
              <Route path="/about" component={About} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
