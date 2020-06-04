---
publish: True
title: "리액트 튜토리얼을 진행하자"
date: "2020-06-02"
url_path : "/blog/2020-06-02/리액트 튜토리얼"
thumbnailImage : ../images/2020-06-02/tictactoe-board.jpg
description : "튜토리얼을 진행하며 배웠던점, 깨달았던 점들을 작성하였습니다."
tags : 
    - 리액트
    - 튜토리얼
    - 게임
---

## 리액트를 간단히 겪다(?)
- [리액트 튜토리얼](https://reactjs.org/tutorial/tutorial.html/)

### 동작방식을 익히다.
 리액트에서는 props, state 를 가지고 논다!
 props 에서 느낀점은 데이터 뿐만아니라 함수까지 전달하는 개념인것같다. [(개념적인 부분은 여기를 참고하자)](https://ko.reactjs.org/docs/components-and-props.html)


인상 깊었던 부분들 (feat. props)
```js
class Game extends React.Component {
    ...
    return ( 
        /*Game class 
         *    squares, onClick, line 을 props 로 
         *    Board 클래스로 넘긴다.
         */
        <Board    
         //highlight-start
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            line = {cal.line}
            //highlight-end     
        /> 
        
    );
    ...
}
    

class Board extends React.Component {
    ...

    /*Board Class
     *   this.props 로 Game class 에서 넣은
     *   square, onClik, line 의 값 혹은 함수를 활용(?)한다..
     */
    renderSquare(i) {
        return (
            <Square 
                //highlight-start
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}
                line={this.props.line.indexOf(i) === -1 ? null  :  true}
                 //highlight-end
            />
        );
    }
    ...
}
    
```


Tag 안쪽부터 구현하여 바깥쪽을 감쌀수 있다.
```js
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
            //highlight-start
            //내부를 {row} 변수를 사용하여 정의
            items.push(<div className="board-row" key={i}>{row}</div>)
            //highlight-end
        }
      return (
        <div>
            {items}
        </div>
      );
    }
```

State 에 대한 정의를 내릴때, 핸들링하는 부모쪽 클래스에서 정의하며, 이 state 를 잘 핸들링하며 활용한다.

[super props 관련 링크](https://overreacted.io/why-do-we-write-super-props/)

```js
  export default class Game extends React.Component {
    constructor(props) {
        super(props);
        //highlight-start
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
         //highlight-end
      }  
    handleClick(i) {
        // tihs.state.~~ 로 state값을 가져옴
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares).winner || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
         //highlight-start
        this.setState({
          history: history.concat([{
            squares: squares,
            clicked:[Math.floor(i % 3), Math.floor(i / 3)],
          }]),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext,
        });
         //highlight-end
      }
      jumpTo(step) {
        //highlight-start
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
          active: step,
        });
         //highlight-end
      }
      toggleAsc(){
           //highlight-start
          this.setState({
            ascending: !this.state.ascending
          });
           //highlight-end
      }
      ...
```

작성된 컴포넌트 구조 분석.

```js
  export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ... // state 정의
        };
      }
      handleClick(i) {
          ... // state 핸들링
      }
      jumpTo(step) {
          ... // state 핸들링
      }
      toggleAsc(){
          ... // state 핸들링
      }
    render() {
        ... 
        /* 아래 return 에 활용되는 값 정의
        *    변수에 return 을 넣어 많들수도 있음.
        *    const moves = return(<div>abc</div>)
        */
    return (
        ...
        /* 컴포넌트에 함수, render의 변수 등을 넘겨줌.
        *  render() 내 변수를 활용하여 html 작성
        */ 
    )
    }
  }

```

Square 부분에 대한 render 컴포넌트를 따로 작성되었으며, props를 이용하여 표현방법을 정한다.
```js

function Square(props){ // highlight-line
    return (
        //highlight-start
        <button 
          className={props.line ? "winsquare" : "square"} 
          onClick={props.onClick}
        >
            {props.value}
        </button>
        //highlight-end
    )
}

  class Board extends React.Component {
    renderSquare(i) {
      return (
    //highlight-start
      <Square 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
        line={this.props.line.indexOf(i) === -1 ? null  :  true}
      />
     //highlight-end 
      );
    }
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

```

튜토리얼을 했으니, 이제 프로젝트를 진행하자! 개인적으로는 infinite scroll 을 구현해보려고 한다. 

---

 [튜토리얼 결과물 : tic-tac-toe](/projects/tictactoe)

index.js 는 다음과 같다.
```js
//index.js
import React from 'react';
import './index.css';

function Square(props){
    return (
        <button 
          className={props.line ? "winsquare" : "square"} 
          onClick={props.onClick}
        >
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
```
