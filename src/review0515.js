import Item from "./components/Item"
import "./App.css"

function App(){
    // Object in JS
    const user = {
        // key : value
        name : "sowon",
        age : 27,

        // method
        a : function(){

        }
    }
    const names = ["sowonArr", "choiArr"];

    return(
        <div className="App">
            {/*
              shortcut : ctrl+/

              html 코드에서 js 사용 : { 이 안에 사용 }
              class 대신 className 사용
                
            */}
            <input/><br/>
            <hr/>

            {/*
              컴포넌트
              - 코드 재사용성, 유지보수, ui를 논리적 단위로 나누어 개발
              - 클래스형 / 함수형

              함수형 컴포넌트
              - js함수로 정의 > 간단하고 가독성 높음
              - Hooks 사용해 상태 관리나 생명 주기 기능 구현 가능

              컴포넌트 설계 원칙
              1. 단일책임: 하나의 컴포넌트는 하나의 기능만 담당
              2. 재사용성: 자주 사용되는 ui요소는 컴포넌트화 > 코드 중복 방지
              3. 계층구조: 복잡한 ui를 작은 컴포넌트의 조합으로 구성
              4. 함수명 첫글자는 대문자!!!!!!!!!!!!!
              5. 컴포넌트 사용 공간에 <함수명/>으로 호출해서 사용

              다른 페이지에 컴포넌트 제작 시
              1. 만든 컴포넌트 전송 > export default 함수명
              2. 만든 컴포넌트 호출 > import 함수명 from 파일경로로
            */}
            

            <div className="allBox">
              <Box name="sowon" age={20}/>
              <Box name="choi" age={24}/>
              <Item name="CHOI"/>
              {
                names.map((item, index) => (
                  <Box name={item} key={index} />
                ))
              }
            </div>

            {/*
              Props
              : 부모 컴포넌트에서 자식 컴포넌트로 전달하는 매개변수

              - 읽기 전용. 단방향 데이터흐름 유지(only 부모>자식). 자식에서 수정 불가
              - 타입 검사 및 기본갑 설정 권고
              - 함수를 Props로 전달할 때는 불필요한 렌더링 피하기 위해 useCallback Hooks 등을 사용.

              **
              자식에서 부모로 데이터를 보내거나, 너무 많은 컴포넌트를 거쳐야할 경우(세대차이 많이 나는 경우)는,
              react redux 사용해서 전역 관리.
            */}
        </div>
    )
}

/*
  arrow function
  () => {

  }
*/
const Box = (props) => {
  return(
    <div className="box">
      <h3>{props.name}</h3>
      <h4>{props.age}</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow 
      </p>
    </div>
  )
}

export default App;