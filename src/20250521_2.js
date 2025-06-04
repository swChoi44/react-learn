import React, { useState } from 'react'
import Nav from "./components/Nav"
import List from "./components/List"
import "./App.css"

const App = () => {

  const menus = [
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

  // 상태관리
  const [state, setState] = useState({category: "전체", W_id: null})

  //카테고리 필터링
  const fillterMenu = state.category === "전체" ? menus : menus.filter((menu) => menu.category === state.category)

  // 카테고리 중복제거
  const categories = ["전체", ...new Set(menus.map(menu => menu.category))]
  console.log(categories)

  // 선택한 데이터 가져오기
  const selectW = menus.find(menu => menu.id === state.W_id)

  // 상태변경 핸들러
  const setSelectedCategory = category => setState(prev => ({...prev, category}))
  // const setSelectedMenu = W_id => setState(prev => ({...prev, W_id}))

  return (
    <div>
      <h1>최근 본 상품</h1>
      <div className="nav">
        {
          // <Nav categories={categories}/>
          // !state.W_id && (
          //   <Nav categories={categories} selectedCategory={state.category} onSelectCategory={setSelectedCategory}/>
          // )
          <Nav categories={categories} selectedCategory={state.category} onSelectCategory={setSelectedCategory}/>
        }
      </div>

      <div >
        {
          <List menus={fillterMenu}/>
        }
      </div>

    </div>
  )
}

export default App
