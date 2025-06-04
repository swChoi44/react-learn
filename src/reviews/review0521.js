import React, {useState} from 'react'
import Nav from "./components/Nav"
import List from "./components/List"
import "../App.css"

const App = () => {

  const menus = [
    {
      id: 1,
      name: "Apple 2024 에어팟 4세대",
      category: "블루투스 이어폰",
      price: "175,000원",
      img: "/img/1.jpg" // /로 public 자동 연결 (in react)
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

  // 상태관리(카테고리 선택)
  const [state, setState] = useState({category: "전체", W_id: null})

  // 카테고리
  const categories = ["전체", ...new Set(menus.map((menu) => (menu.category)))]
  /*
    Set : "중복 허용하지 않는" 내장(Built-in) 컬렉션 / 순서보장 / iterable
    * 컬렉션 : 여러 데이터 타입을 저장, 관리하는 데이터구조 => 데이터타입 제한없이 사용가능
      즉, Set은 컬렉션 역할을 하는 내장 객체
    - .add() : 중복은 무시.
    - .has() : 값이 있는지 확인 후 true/false 반환
    - .delete() : 삭제 성공하면 true/삭제할 값 없어서 실패하면 false
    - .size : method 아닌 property. Set 안에 요소 몇 개 있는지 확인.
    - .clear() : 모든 요소 제거
    *.forEach() 사용 가능
    *.map() 사용 불가능. 스프레드로 펼쳐서 사용
    *.reduce() : 배열로 변환 후 사용가능 => [...setObject].reduce()

    .reduce((누적값,현재값) => 계산식, 초기값)
    - 덧셈에선 초기값 0, 곱셈에선 초기값 1
    ex) arr.reduce((acc,cur) => acc+cur, 0)


    ...
    1) spread : 배열/객체 펼침
    2) rest parameter : 주로 함수의 매개변수 자리에 사용. 전달된 값 배열로 묶어줌.

    for in js
    1) for (const key in obejct){ object[key]로 사용 } - 키 순회. 배열에선 index (그냥 배열.forEach 쓸 듯)
    2) for (const value of iterable){ value 바로 사용 } - 값 순회.
  */

  // 카테고리 필터링 : 선택된 카테고리에 맞는 상품들
  const filterMenus = state.category === "전체" ? menus : menus.filter((menu) => (menu.category == state.category))

  // 상태변경 핸들러
  const setSelectedCategory = (category) => (setState((prev)=>({...prev, category})))
  /*
    state가 여러 필드 가질 수도 있어서, 완전히 대체해 다른 값들도 싹 없애는 건 위험.
    그래서 이전 값을 받아 selectedCategory값만 바꾼 값으로 대체.
    (코드 수정 전 W_id가 있었기 때문에 사용한듯.)

    arrow function에서 매개변수 category는 category: {category} 축약형
    => state에 원래 있는 변수명으로 쓰는 게 안전.
  */

  return (
    <div>
      {/* 
        컴포넌트 배열 렌더링 시 key값 이용해 변동 있는 원소 찾아냄.
        key가 없을 때는 (virtual dom을 비교하는 과정에서) 리스트를 순차적으로 비교하면서 찾아냄.
      */}

      <h1>최근 본 상품</h1>

      <div className='nav'>
        {
          <Nav categories={categories} selectedCategory={state.category} onSelectCategory={setSelectedCategory}/>
        }
      </div>

      <div>
        {
          <List menus={filterMenus}/>
        }
      </div>

    </div>
  )
}

export default App
