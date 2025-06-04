import Item from "./components/Item"
import './App.css';


function App() {
  const obejectName = {
    // key : value
    name: "sowon",
    age: 20,
    // method
    // a: function(){}
  }

  const user = {
    name: "최소원",
    age: 20
  }
  let box="hello"

  const Click = ()=>{
    alert("click");
  }

  return (
    <div className="App">
      {/*
        jsx
        최상단이 하나만 단일경로 제작 : 하나의 단일경로(하나의 div로 감싸서) return

        ctrl+/ 주석
        
        단독태그 사용 > 태그 끝에 /추가

        class 대신 className 사용
      */}
      <input />
      <br/>
      <hr/>

      {/* 
        컴포넌트
        - 코드 재사용성, 유지보수, 효율성(ui를 논리적 단위로 나누어 개발가능)
        > 클래스형(초창기) / "함수형"

        함수형 컴포넌트
        - js함수로 정의(익명/선언) > 간단, 가독성
        - Hooks 사용해 상태관리,생명주기 기능 구현 가능

        컴포넌트 설계 원칙
        1. 단일 책임: 각 컴포넌트는 하나의 기능만 담당
        2. 재사용성: 자주 사용되는 ui요소는 컴포넌트화
        3. 계층구조: 복잡한 ui = 작은 컴포넌트의 조합으로 구성
        4. 함수명 첫글자는 반드시 대문자! (에러남)
        5. 컴포넌트 사용 공간에 <함수명/>으로 호출해서 사용

        새로운페이지 컴포넌트 제작
        1. 만든 컴포넌트 전송 export default 함수명        
        2. 사용할 파일에서 호출 import
      */}

        <div className="allBox">
          <Box name="sowon" age={20} onClick={Click}/>
          <Box name="choi" age={24} onClick={Click}/>
          <Box name="choi" age={28} onClick={Click}/>
          <Box name="choi" age={32} onClick={Click}/>
          <Item user={user} box={box}/>
          <Test><Box name="choi" age={32}/></Test>
        </div>

        {/* 
          Props
          : 부모 컴포넌트가 자식 컴포넌트에 전달하는 데이터 함수의 매개변수

          - Props는 읽기전용, 자식 컴포넌트에서 직접 수정 불가
          - Props는 단방향 데이터 흐름을 유지. 데이터는 항상 부모->자식으로 흐름. (자식->부모는 전역관리 react redux 사용)
          - Props는 타입을 검사하고 기본값 설정하는 게 좋음.
          - 너무 많은 컴포넌트를 거쳐서 Props를 전달하는 것은 안좋음. (세대차이 많이 나면 전역관리로 redux 사용)
          - 함수를 props로 전달할 때는 불필요한 렌더링을 피하기 위해 useCallback 훅 등을 사용해야함.

        */}
    </div>
  );
}

// function(){} == const FunctionName = ()=>{} "arrow function"
const Box = ({name, age, onClick})=>{ // props로 한꺼번에 가져오기 vs {}로 감싸서 각각 따로 가져오기(props 중복 방지)
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

const Test = ({children})=>{
  return(
    <div className="test">
      <h3>Test Component</h3>
      {children}
    </div>
  )
}

export default App;
