/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import './Game.css';
import Board from './Board';

// 棋盤格線設定
const line = 19;

function calculateWinner(history) {
  const lines = [
    [0, 1, 2, 3, 4],
    [0, 18, 36, 54, 72],
    [0, 19, 38, 57, 76],
    [4, 21, 38, 55, 72],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c, d, e] = lines[i];
    for (let j = 0; j < 14; j += 1) { // 檢查橫向是否 win
      for (let k = 0; k < 21; k += 1) { // 檢查縱向是否 win
        if (
          history[a + j + (k * 18)]
          && history[a + j + (k * 18)] === history[b + j + (k * 18)]
          && history[b + j + (k * 18)] === history[c + j + (k * 18)]
          && history[c + j + (k * 18)] === history[d + j + (k * 18)]
          && history[d + j + (k * 18)] === history[e + j + (k * 18)]
        ) {
          return history[a + j + (k * 18)];
        }
      }
    }
  }
  return false;
}

class Game extends Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(line * line).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.backOneStep = this.backOneStep.bind(this);
  }

  handleClick(i) {
    const { history, xIsNext } = this.state;
    const current = history[history.length - 1];
    const currentSquares = current.squares.slice();
    if (calculateWinner(currentSquares) || currentSquares[i]) {
      return;
    }
    currentSquares[i] = xIsNext ? 'black' : 'white';
    this.setState({
      history: history.concat([{
        squares: currentSquares,
      }]),
      xIsNext: !xIsNext,
      stepNumber: history.length,
    });
  }

  resetGame() {
    this.setState({
      history: [{
        squares: Array(line * line).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
    });
  }

  backOneStep() {
    const { history, xIsNext } = this.state;
    if (history.length < 0) {
      return;
    }
    const backStep = history.slice(0, [history.length - 1]);
    this.setState({
      history: backStep,
      xIsNext: !xIsNext,
      stepNumber: (history.length - 1) - 1,
    });
  }

  render() {
    const { history, stepNumber, xIsNext } = this.state;
    const currentSquares = history[history.length - 1].squares;
    const winner = calculateWinner(currentSquares);
    const isHasBackStep = stepNumber > 0 ? 'Back Step' : '';
    let status = null;
    let reset = null;
    if (winner) {
      status = `Winner: ${winner}`;
      reset = 'Reset Game';
    } else {
      status = `Next Player: ${xIsNext ? 'Black' : 'White'}`;
    }
    return (
      <div className="game">
        <div className="title">GOMOKU</div>
        <div className="player">{status}</div>
        {/* eslint-disable-next-line */}
        <div className="backStep" onClick={this.backOneStep}>{isHasBackStep}</div>
        {/* eslint-disable-next-line */}
        <div className="resetGame" onClick={this.resetGame}>{reset}</div>
        {/* eslint-disable-next-line */}
        <Board history={currentSquares} handleClick={this.handleClick} />
        <br />
      </div>
    );
  }
}

export default Game;
