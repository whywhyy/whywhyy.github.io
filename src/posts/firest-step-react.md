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
### CSS 를 사용하자

```css {1-3,7,10-11}
p {
  font-size: 1rem;
}

h2 {
  font-size: 1.2rem;
}

h3 {
  font-size: 1rem;
}

.gatsby-highlight pre[class*="language-"]{
  border-radius: 1rem;
  font-size: 14px;
  overflow: auto;
  min-width: 100%; 

}
code[class*="language-"]{
  white-space: pre-wrap;
  word-break: break-word;
}

.gatsby-highlight-code-line{
  display: block;
  background-color: 	#424242;
  margin-left: -.7rem;
  padding-left: 1rem;
  margin-right: -.7rem;
  overflow: auto;
}
```


ES5
```javascript {1-3}
import React from 'react';qwgqwgqwgsagqwhqwgqwgqwgqwgqwgasdasdwegwgwqgwqegwqgweqgwqgwqgsagawegqgwq
import './index.css';
function Square(props){ 
    return (
        <button className={props.line ? "winsquare" : "square"} onClick={props.onClick}>
            {props.value}
        </button>
    )
} 
```

### h2 두번째 태그


---

[튜토리얼 결과물 : tic-tac-toe](/projects/tictactoe)
