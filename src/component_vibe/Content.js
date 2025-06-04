import React from 'react'
import List from './List.js'

const Content = ({imgs}) => {

  /*
    let item = [
      {
        id: 1,
        name: "지금인기",
        img: "/img/b1.png", -- /로 public 직통
      },
      ...
    ]
  */

  return (
    <div className="content"> {/* id="dj" */}
      <div className='title'>
        <h1>DJ 스테이션</h1> {/* h2 */}
        <button className="theme" type="button"><i class="fa-solid fa-wand-magic-sparkles"></i>테마</button>
      </div>

      <List imgs={imgs}/>
    </div>
    /*
      div .station
        h3 느낌별 스테이션 -- h태그는 크기가 아니라 계층순위별로 부여. 크기는 css에서 조절
        div .s_item
          {
            item.map((items) => (
              <Item key={items.id} items={items}/>
            ))
          }
            
    */
  )
}

export default Content

// 내부 컴포넌트로 선언
const Item = ({items}) => {
  return(
    <div>
      <a href='#'><img src={items.img} alt={items.name}/></a>
    </div>
  )
}