import React from 'react';
import './index.css';

function Square(props){
    return (
        <button className={props.line ? "winsquare" : "square"} onClick={props.onClick}>
            {props.value}
        </button>
    )
}
  class Board extends React.Component {
    // 5. 승자가 정해지면 승부의 원인이 된 세 개의 사각형을 강조해주세요.
    renderSquare(i) {
      return (
      <Square 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
        line={this.props.line.indexOf(i) === -1 ? null  :  true}
      />
      );
    }
    // 3.사각형들을 만들 때 하드코딩 대신에 두 개의 반복문을 사용하도록 Board를 다시 작성해주세요.
    render() {
        let items = [];
        for (let i = 0; i<3 ;i++){
            let row = [];
            for (let j=0; j<3;j++){
                row.push(
                <span key={(i*3)+j}>
                    {this.renderSquare((i*3)+j)}
                </span>);
            }
            items.push(<div className="board-row" key={i}>{row}</div>)
        }
      return (
        <div>
            {items}
        </div>
      );
    }
  }
  
  export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          history: [{
            squares: Array(9).fill(null),
            clicked:[0,0],
          }],
          stepNumber: 0,
          xIsNext: true,
          active : -1,
          ascending : true,
        };
      }
      handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares).winner || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          history: history.concat([{
            squares: squares,
            clicked:[Math.floor(i % 3), Math.floor(i / 3)],
          }]),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext,
        });
      }
      jumpTo(step) {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
          active: step,
        });
      }
      toggleAsc(){
          this.setState({
            ascending: !this.state.ascending
          });
      }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const cal = calculateWinner(current.squares);
        // 2.이동 목록에서 현재 선택된 아이템을 굵게 표시해주세요.
        const active = {fontWeight:900}
        const inactive = {fontWeight:100}
        // 1.이동 기록 목록에서 특정 형식(행, 열)으로 각 이동의 위치를 표시해주세요.
        const moves = history.map((step, move) => {
            const desc = move ?
              'Go to move #' + move + " x :"  + step.clicked[0]+  " y :" + step.clicked[1]:
              'Go to game start';
            return (
              <li key={move}>
                <button 
                style={move === this.state.active ? active : inactive}
                className ="curlist" 
                onClick={() => this.jumpTo(move)}>
                    {desc}
                </button>
              </li>
            );
          });
        // 4. 오름차순이나 내림차순으로 이동을 정렬하도록 토글 버튼을 추가해주세요.
        if (!this.state.ascending){
            moves.sort((a,b)=> {
                return b.key - a.key ; 
            })
            // OR  moves.reverse();
        }

        // 6. 승자가 없는 경우 무승부라는 메시지를 표시해주세요.
        let status;
        if (cal.winner) {
        status = 'Winner: ' + cal.winner;
        }
        else if(cal.isDraw){
            status = 'Draw '
        } 
        else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
                line = {cal.line}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
            <button onClick={() => this.toggleAsc()}>Change order</button>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  


  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
            winner : squares[a],
            line : lines[i],
            isDraw : false,
        }
      }
    }
    for (let i = 0; i < squares.length; i++){
        if (squares[i] === null){
            return {
                winner : null,
                line : [],
                isDraw : false,
            }
        }
    }
    return {
        winner : null,
        line : [],
        isDraw : true,
    }
  }