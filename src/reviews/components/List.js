import React from 'react'

const List = ({menus}) => {
  return (
    <div className='allList'>
      {
        menus.map((menu)=>(
          <div key={menu.id}>
            <img src={menu.img} alt='/'/>
            <h3>{menu.name}</h3>
            <h4>{menu.price}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default List
