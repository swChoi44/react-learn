import React, {useState, useEffect} from 'react'

/*
  함수형 컴포넌트에서 라이프사이클 주기 위해서는
  useEffect() 훅 사용.

  useEffect(()=>{ componentDidMount 역할 },[ componentDidUpdate 역할 ])
*/

const App = () => {

  let [count, setCount] = useState(0)

  console.log("START")

  const Plus = () => {
    setCount(count+1)
  }

  useEffect(()=>{
    console.log("useEffect")
    // class형에서 componentDidMount 지점 - update 하면 안부르더라
    // 따라서 여기서 call APIs
  },[])

  useEffect(()=>{
    console.log("2nd useEffect", count)
  },[count])
  // 업데이트되었을때 새로 렌더되어야 하는 state 값들을 배열에 추가.
  // 배열에 들어가는 state가 바뀔때만 렌더. 여기에는 자주 바뀌는 state를 삽입.
  // 계속 렌더되는 현상 방지

  return (
    <div>
      {console.log("RETURN")}
      <h2>{count}</h2>
      <button type="button" onClick={Plus}>plus</button>
    </div>
  )
}

export default App
