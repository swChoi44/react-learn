import React from 'react'

const Nav = ({categories, selectedCategory, onSelectCategory}) => {
  // selectedCategory는 선택된 버튼 표시하기 위한 걸로 추정.

  return (
    <div>
      {
        categories.map((category, idx) => (
          <button type="button" key={idx} onClick={() => onSelectCategory(category)}>{category}</button>
        ))
      }
    </div>
  )
}

export default Nav
