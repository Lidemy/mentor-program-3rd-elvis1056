/* eslint-disable */

import React, { Component } from 'react';

class ArticlePage extends Component {
    render() {
      const { article, clearHandleArticle } = this.props
      return (
        <div className="oneArticle">
          <div className="oneArticle-title">{article.title ? article.title:'努力加載中....'}</div>
          <br />
          <div className="oneArticle-content">{article.body}</div>
          <br />
          <button className="oneArticle-btn" onClick={ ()=>{clearHandleArticle()} }>Back</button>
        </div>
      );
    }
  }

export default ArticlePage;
