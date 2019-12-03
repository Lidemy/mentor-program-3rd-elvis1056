/* eslint-disable */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticlePage extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`https://qootest.com/posts/${id}`)
      .then(res => res.json())
      .then(json => this.setState({
        data: json,
      }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="oneArticle">
        <div className="oneArticle-title">{ data.title ? data.title : '努力加載中....' }</div>
        <br />
        <div className="oneArticle-content">{ data.body }</div>
        <br />
        <Link to="/articles" className="oneArticle-btn">Back</Link>
      </div>
    );
  }
}

export default ArticlePage;
