// react - Simple ~ >> rafc
import React from 'react'

import { useState } from 'react';

import Item from './components/Item'
import './App.css';

const App = () => {
    const user = {
        name: "choi",
        age: 20
    }
    const Click = ()=>{
        alert("clicked")
    }

    const [num, setNum] = useState(0) // 모든 타입 가능.
    const plus = ()=>{
      setNum(num + 1)
    }

    const category = ['music', 'movie', 'book']

    const users=[
      { id: 1, name: 'Alice', age: 27 },
      { id: 2, name: 'Bob', age: 32 },
      { id: 3, name: 'Charlie', age: 25 },
      { id: 4, name: 'Dana', age: 32 },
    ]

    const over30 = users.filter(user => user.age >=30) // arrow func의 형태: 매개변수 => 반환할 조건
    console.log("over30", over30)

    const id2 = users.find(user => user.id==2)
    console.log("id2", id2)

    users.forEach((item, idx) => (
      item.age = item.age+1
    ))
    console.log("forEach", users)

  return (
    <div>
      {/* 
        props로 객체, 함수, 컴포넌트 전달
      */}

      <div className='allBox'>
        <Item user={user}/>
        <Box name="sowon" age="27" onClick={Click}/>
        <Test><Box name="choi"/></Test>
      </div>
      <hr/>

      {/* 
        state
        - 컴포넌트 내부에서 값 변할 수 있는 데이터. useState를 통해 상태값 선언 및 변경
        - 비동기적. 렌더링을 "예약"해두고 나중에 몰아서 처리. 따라서 리렌더링이 일어나야 변수값 바뀜

        Hook
        - 함수에 의해서 state 관리
      */}

      <h2>{num}</h2>
      <button type="button" onClick={plus}>Plus</button>
      <hr/>

      {/* 
        배열 메서드
        - map: 배열을 변형해 새 배열 만듦
        - filter: 조건에 맞는 요소 추출
        - find: 조건에 맞는 첫번째 요소 반환
        - forEach: 배열을 돌며 작업 수행(반환X) - 새 배열을 반환하지 않는다는 점에서 map과 차이
        - some: 조건 만족하는 요소 하나라도 있는지
        - every: 모든 요소가 조건을 만족하는지
        - reduce: 누적 연산
      */}

      {
        category.map((item, idx)=>(
          <div key={idx}>{item}</div>
        ))
      }

      {
        users.forEach((item, idx)=>(
          <div key={idx}>{item.name}</div> // forEach는 리턴 안함! 화면에 안나옴!
        ))
      }

    </div>
  )
}

const Box = ({name, age, onClick})=>{
  return(
    <div className="box" onClick={onClick}>
      <h3>{name}</h3>
      <h4>{age}</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow 
      </p>
    </div>
  )
}

const Test = ({children})=>{ // children이라는 props임.
    return(
        <div>
            <h3>TEST COMPONENT</h3>
            {children}
        </div>
    )
}

export default App
