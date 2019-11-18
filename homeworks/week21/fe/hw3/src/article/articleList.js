/* eslint-disable */

import React, { Component } from 'react';

class ArticleList extends Component {
  render() {
    const { id, title, handleArticle } = this.props;
    return (
      <div className="article" onClick={ () => {handleArticle(id)} }>
        <div className="article__id">{id}</div>
        <div className="article__title">{title}</div>
      </div>
    );
  }
}

export default ArticleList;
