import React from 'react'
import { useState } from 'react'; // state hook 호출

const App = () => {
    
    let count = 0; // 렌더될때마다 위에서부터 다시 읽음. 그래서 계속 0이 들어감.
    const [num, setNum] = useState (0)// [] 사용. 변수이름과 상태를 관리할 함수 이름(set~)
    const [list, setList] = useState([1,2,3,4,5]) // 숫자 이외에도 가능

    const plus = ()=>{
        count = count+1
        setNum(num + 1) // state의 함수들은 비동기적. 렌더가 끝나야(return이 되어야) 증가됨 -?
        // 렌더 되는 게 아니라 실제 동작이 일어나야 상태를 변경.
        console.log(count, num) // return 되기 전
    }

    const category = ['music', 'movie', 'book']
  
  return (
    <div>
      {/* 
        state : 리액트 함수형 컴포넌트에서 상태(state)를 관리할 수 있게 해주는 hook
        상태: 컴포넌트 내부에서 값이 변할 수 있는 데이터를 의미하며, useState를 통해 상태값을 선언하고 변경.
        **함수에 의해서 상태를 관리하는 걸 hook이라고 함
      */}

        {
            category.map((item,idx)=>(
                <div key={idx}>{item}</div>
            ))
        }
        {
            list.map((item,idx)=>(
                <div key={idx}>{item}</div>
            ))
        }



      <h2>{count}</h2>
      <h2>{num}</h2>
      <button type="button" onClick={plus}>Plus!</button>
    </div>
  )
}

export default App
