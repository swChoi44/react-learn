import React from 'react'
import Nav from './component_vibe/Nav'
import Content from './component_vibe/Content'
import "./vibe.css" // src/style 폴더 만들어서 관리 가능
<script src="https://kit.fontawesome.com/55c50683e3.js" crossorigin="anonymous"></script>

const App = () => {

  const imgs = [
    {
      id: 1,
      name: "지금인기",
      img: "/img/b1.png"
    },
    {
      id: 2,
      name: "힙터질때",
      img: "/img/b2.png"
    },
    {
      id: 3,
      name: "신났을때",
      img: "/img/b3.png"
    },
    {
      id: 4,
      name: "우울할때",
      img: "/img/b4.png"
    },
    {
      id: 5,
      name: "사랑할때",
      img: "/img/b5.png"
    },
    {
      id: 6,
      name: "사랑했을때때",
      img: "/img/b6.png"
    },
    {
      id: 7,
      name: "집중할때",
      img: "/img/b7.png"
    },
    {
      id: 8,
      name: "멍때릴때",
      img: "/img/b8.png"
    },
    {
      id: 9,
      name: "운동할때",
      img: "/img/b9.png"
    },
    {
      id: 10,
      name: "휴실할때",
      img: "/img/b10.png"
    },
    {
      id: 11,
      name: "파티할때",
      img: "/img/b11.png"
    },
    {
      id: 12,
      name: "외로울때",
      img: "/img/b12.png"
    },
    {
      id: 13,
      name: "덜깼을때",
      img: "/img/b13.png"
    },
    {
      id: 14,
      name: "잠안올때",
      img: "/img/b14.png"
    },
  ]

  return (
    <div className="all">
      <Nav/>
      <Content imgs={imgs}/>
    </div>
  )
}

export default App

// 라우터, 배포

/*
  섹션같이 큰 구역들은 외부 Component로. 그 안에서 반복되는 박스들은 내부 Component로 ★
  js나 jsx나 똑같이 작용함.

  Vibe.js
    import Header from ./component/Header
    import Dj from ./component/Dj
    import S_Item from ./component/S_Item

    div
      Nav
      div .contents
        Dj

  component/Hearder.js (my Nav)
    return을 div가 아닌 header로

  component/Dj.js (my Content)
    let item으로 객체배열 선언 -- 여기서 데이터 전달
    "내부 컴포넌트 Item 선언"
*/