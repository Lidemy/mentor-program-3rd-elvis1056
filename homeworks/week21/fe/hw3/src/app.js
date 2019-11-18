/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import './app.css';
import About from './about/about';
import Articles from './article/article';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tab: 'article',
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleArticle() {
    this.setState({
      tab: null,
    });
  }

  handlePageChange(page) {
    this.setState({
      tab: page,
    });
  }

  render() {
    const { tab } = this.state;
    return (
      <div>
        <div className="nav">
          <div className="nav__list">
            {/* eslint-disable-next-line */}
            <div className="nav__logo" onClick={()=>{this.handlePageChange('article')}}>
              Blog
            </div>
            {/* eslint-disable-next-line */}
            <div className="nav__item" onClick={()=>{this.handlePageChange('article')}}>
              Article
            </div>
            {/* eslint-disable-next-line */}
            <div className="nav__item" onClick={()=>{this.handlePageChange('about')}}>
              About
            </div>
          </div>
        </div>
        <div className="container">
          {(tab === 'about') && <About />}
          {(tab === 'article') && <Articles />}
        </div>
      </div>
    );
  }
}

export default App;
