import React, {useState} from 'react'
import ReviewApp from './review0523_functional'

const App = () => {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button type="button" onClick={() => setShow(prev => !prev)}>Toggle</button>
      {show && <ReviewApp/>}
    </div>
  )
}

export default App

/*
  Async in js
  1) setTimeout(callback, delayMs) -> clearTimeout()
     const timerId = setTimeout(() => {
       consnole.log("run in 3s")
      }, 3000)
     clearTimeout(timerId)
  2) setInterval(callback, intervalMs) -> clearInterval()
     const intervalId = setInterval(() => {
        console.log("run every 3s")
      }, 3000)
      clearInterval(intervalId)
*/