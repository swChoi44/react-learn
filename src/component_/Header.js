import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='notice'>
        <a href="#">매장 공지사항이나 메세지 공유하기</a>
        {/* display block 처리해서 div 꽉 채우기 */}
      </div>
      <div className='header'>
        <ul>
          <li><a href="#">상표</a></li>
          <li><a href="#">남자들</a></li>
          <li><a href="#">여성</a></li>
          <li><a href="#">어린이</a></li>
          <li><a href="#">라이프스타일</a></li>
          <li><a href="#">갤러리</a></li>
          <li><a href="#">소식</a></li>
        </ul>
        <a className="logo" href="#"><img src="/img/image 1.jpg"/></a>
      </div>
      
      
    </header>
  )
}

export default Header
