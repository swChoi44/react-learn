// class-Based Component

import React, {Component} from 'react'

export default class App extends Component{
  // class component에서 state 사용시 this 사용.
  // this.state.~ OR this.setState({~: this.state.~연산})

  constructor(props){
    super(props)

    this.state = {
      // 초기값
      count: 0,
    }
    console.log("Constructor")
  }

  Plus = () => {
    this.setState({count: this.state.count + 1}) // book Render (Async)
    console.log("Plus", this.state) // no-change
  }

  // 렌더할때마다 API 호출하지 않기 위해(과부하) 렌더가 끝나고 call APIs.
  // value-changed. 즉, Async 작업을 확인하려면 이때!
  componentDidMount(){
    console.log("componentDidMount")
    // 처음 constructor에 의해 ui 생성하는 렌더 완료 후, 컴포넌트 사용해 화면에 ui 붙이기
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
    // 처음 실행되서 화면에 붙인 ui는 더이상 dom에서 처리할 필요 없으니까, 컴포넌트(dom node)를 메모리에서 제거
    // 코드가 변해도 실행된다! 다른 컴포넌트가 된거니까 그걸로 바꾼다고?
  }
  // 이 세 가지가 lifecycle method!

  render(){
    console.log("Render")
    return(
      <div>
        <h2>Class-Based Componenet</h2>
        <h3>{this.state.count}</h3>
        <button type="button" onClick={this.Plus}>plus</button>
        
        <Box num={this.state.count}/>
      </div>
    )
  }
}

// Make "Box" Component in Class-Based Component
// 매개변수는 무조건 props가 받으므로, this.props.~로 사용.
class Box extends Component{
  render(){
    return(
      <div>
        <h2>Box Component</h2>
        <h3>{this.props.num}</h3>
      </div>
    )
  }
}