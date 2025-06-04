import React from 'react'

const Nav = ({categories, selectedCategory, onSelectCategory}) => {
  
  return (
    <div>
      {
        categories.map((menuList,idx) => (
          <button type="button" key={idx} onClick={()=>onSelectCategory(menuList)}>{menuList}</button>
        ))
      }
    </div>
  )
}

export default Nav
