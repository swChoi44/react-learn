import React, { useState } from 'react'
import "./App.css"

const App = () => {

  const menu = [
    {
      id: 1,
      name: "Apple 2024 에어팟 4세대",
      category: "블루투스 이어폰",
      price: "175,000원",
      img: "/img/1.jpg" // / => public 자동 연결(in react)
    },
    {
      id: 2,
      name: "삼성전자 갤럭시 버즈 FE",
      category: "블루투스 이어폰",
      price: "53,770원",
      img: "/img/2.jpg"
    },
    {
      id: 3,
      name: "냉동 흰다리 새우살, 300g(24~33미)",
      category: "식품",
      price: "6,890원",
      img: "/img/3.jpg"
    },
    {
      id: 4,
      name: "이홈베이킹 옥수수식빵틀, 1개",
      category: "베이킹",
      price: "6,360원",
      img: "/img/4.jpg"
    },
    {
      id: 5,
      name: "한강식품 대패 닭가슴살 (냉동), 2개, 400g",
      category: "식품",
      price: "175,000원",
      img: "/img/5.jpg"
    },
    {
      id: 6,
      name: "브리츠 트루 무선 스테레오 블루투스 이어폰",
      category: "블루투스 이어폰",
      price: "28,400원",
      img: "/img/6.jpg"
    },
  ]

  // console.log(menu)

  return (
    <div>
      {/* 
        key : 컴포넌트 배열을 렌더링 했을때 어떤 원소에 변동이 있었는지 알아내기 위해 사용
        
        유동적인 데이터를 다룰 때는 원소를 새로 생성,제거,수정 할 수 있음
        key가 없을 때는 virtual dom을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지

      */}

      <h1>최근 본 상품</h1>

      <div className="allList">
        {
          menu.map((menus)=>(
           <div className="list" key={menus.id}>
              <img src={menus.img} alt="/"/>
              <h3>{menus.name}</h3>
              <h4>{menus.price}</h4>
            </div>
         ))
        }
      </div>
    </div>
  )
}

export default App
