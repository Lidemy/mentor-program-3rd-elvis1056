/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import ArticleList from './articleList';
import ArticlePage from './ArticlePage';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: null,
      oneArticleData: [],
      data: [],
    };
    this.handleArticle = this.handleArticle.bind(this);
    this.clearHandleArticle = this.clearHandleArticle.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => this.setState({
        data: json,
      }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { articleId } = this.state;
    if (prevState.articleId !== articleId) {
      if (articleId === null) return;
      this.getOneArticle(articleId);
    }
  }

  getOneArticle(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(json => this.setState({
        oneArticleData: json,
      }));
  }

  clearHandleArticle() {
    this.setState({
      articleId: null,
      oneArticleData: [],
    });
  }

  handleArticle(id) {
    this.setState({
      articleId: id,
    });
  }

  render() {
    const { data, articleId, oneArticleData } = this.state;
    return (
      <div className="content">
        <div className="content__title">Welcome Articles Page</div>
        { !articleId && (
          <div className="articles">
            {data.map(article => (
              <ArticleList
                handleArticle={this.handleArticle}
                key={article.id}
                id={article.id}
                title={article.title}
              />
            ))}
          </div>
        )}
        { articleId && (
          <ArticlePage article={oneArticleData} clearHandleArticle={this.clearHandleArticle} />
        ) }
      </div>
    );
  }
}

export default Articles;
