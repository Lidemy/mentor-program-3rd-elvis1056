/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav__list">
      <div className="nav__logo">
        <Link to="/">Blog</Link>
      </div>
      <div className="nav__item margin-right-15">
        <Link to="/articles">Article</Link>
      </div>
      <div className="nav__item margin-right-15">
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
