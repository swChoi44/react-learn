// Functional Component - lifestyle : useEffect()
// - 함수형에선 lifecycle 메서드가 없으니까 useEffect hook으로 관리

import React, {useState, useEffect} from 'react'
// useEffect(() = > { componentDidMount }, [ componentDidUpdate ])

const ReviewApp = () => {
  
  let [count, setCount] = useState(0)
  console.log("SET-START")

  const Plus = () => {
    setCount(count+1)
  }

  useEffect(() => {
    console.log("Mounting-useEffect")

    const timer = setInterval(() => {
      console.log("Interval")
    }, 1000)

    return () => {
      // 정리(clearnup) : 컴포넌트 사라질때 실행
      clearInterval(timer)
      console.log("UnMounting-useEffect", count)
    }
  
  },[]) // 의존성배열이 빈 배열이면 mount & unmount만 감지. 처음 한번만 실행 - componentDidMount

  useEffect(() => {
    console.log("Updating-useEffect", count)
  },[count]) // 의존성배열에 들어간 state들(,로 구분)의 update 감지 - componentDidUpdate

  return (
    <div>
      {console.log("RETURN")}
      <h2>{count}</h2>
      <button type="button" onClick={Plus}>plus</button>
    </div>
  )
}

export default ReviewApp
