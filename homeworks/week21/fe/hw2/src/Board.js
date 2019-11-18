/* eslint-disable */

import React, { Component } from 'react';

class Board extends Component {
  renderBtn(i) {
    const { history } = this.props;
    const piece = history[i] ? history[i] : '';
    return (
      <div className="btn boardLine" key={i}>
        <div className={`piece ${piece}`} onClick={() => {this.props.handleClick(i)}}></div>
      </div>
    );
  }

  render() {
    const rowBoardRow = [];
    let n = 0;
    for (let i = 0; i < 18; i += 1) {
      const rowBtn = [];
      for (let j = 0; j < 18; j += 1, n += 1) {
        rowBtn.push(this.renderBtn(n));
      }
      rowBoardRow.push(<div className="boardRow" key={i}>{rowBtn}</div>);
    }
    return (
      <div className="board">
        {rowBoardRow}
      </div>
    );
  }
}

export default Board;
