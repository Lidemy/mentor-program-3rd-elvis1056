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

/* eslint-disable-next-line */
class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Router>
            <Nav />
            <Switch>
              <Route path="/react_blog_hw22/" exact component={Home} />
              <Route path="/react_blog_hw22/articles" exact component={Articles} />
              <Route path="/react_blog_hw22/articles/:id" component={ArticlePage} />
              <Route path="/react_blog_hw22/about" component={About} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
