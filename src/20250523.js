/* class형 컴포넌트 */
import React, {Component} from 'react'

export default class App extends Component{
  constructor(props){ // make state
    super(props);
    this.state = {
      // 초기값
      count: 0,

    }
    console.log("constructor")
  }

  Plus = () => {
    this.setState({count: this.state.count + 1}) // render 예약
    console.log("Plus", this.state) // 값이 아직 안바뀜.
  }

  componentDidMount(){
    console.log("componentDidMount") // ui 제대로 만들어지면 실행됨.
    // call APIs - 렌더 이후에 안하면 렌더할때마다 호출되서 과부하.
  }

  componentDidUpdate(){
    console.log("componentDidUpdate", this.state) // render 다 끝나고 발생. 렌더 끝났으니 값 바껴있음.
    // 비동기 in js > timeout, setInterval
  }

  componentWillUnmount(){
    console.log("END") // "처음 실행"하고 맨 마지막에 한 번만 실행.
  }

  render(){
    console.log("render")
    return(
      <div>
        <h2>Class Component</h2>
        <h3>{this.state.count}</h3>
        <button type="button" onClick={this.Plus}>plus</button>
        <Box num={this.state.count}/>
      </div>
    )
  }
}

class Box extends Component{
  render(){
    return(
      <div>
        <h2>box</h2>
        <h3>{this.props.num}</h3>
      </div>
    )
  }
}