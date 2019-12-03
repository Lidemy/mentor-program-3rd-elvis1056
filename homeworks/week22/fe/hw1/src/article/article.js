/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://qootest.com/posts')
      .then(res => res.json())
      .then(json => this.setState({
        data: json,
      }));
  }

  render() {
    const { data } = this.state;
    const vaildData = data.filter(
      eachData => (
        (eachData.title !== '')
        && (eachData.title !== undefined)
        && (eachData.body !== '')
        && (eachData.body !== undefined)
      ),
    );
    return (
      <div className="content">
        <div className="content__title">Welcome Articles Page</div>
        <div className="articles">
          {vaildData.map(article => (
            <Link to={`/articles/${article.id}`} key={`${article.id}`} className="article">
              <div className="article__id">{article.id}</div>
              <div className="article__title">{article.title}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Articles;
