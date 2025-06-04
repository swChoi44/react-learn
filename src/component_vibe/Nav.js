import React from 'react'

const Nav = () => {
  return (
    <div className="nav">
      <h1 className='logo'><a href='#'>NAVER VIBE</a></h1>
      <button type="button" className="subscription">멤버쉽 구독</button>

      <nav className='menu'> {/* 시맨틱 태그들 다 사용 가능! nav 쓰면 className 굳이 필요 없으니까 ul이 각각 menu1, menu2*/}
        <ul className='first'>
          <li><a href='#'>투데이</a></li>
          <li><a href='#'>차트</a></li>
          <li><a href='#'>최신앨범</a></li>
          <li><a href='#'>DJ 스테이션</a></li>
          <li><a href='#'>VIBE MAG</a></li>
          <li><a href='#'>이달의 노래</a></li>
        </ul>
        
        <span className='line'></span> {/* 단순 line에는 div보다 span 사용 */}

        <ul className='second'>
          <li><a href='#'>서비스 소개</a></li>
          <li><a href='#'>내돈내듣</a></li>
          <li><a href='#'>VIBE 오디오</a></li>
          <li><a href='#'>REWIND 2024</a></li>
          <li><a href='#'>이용권 선물</a></li>
        </ul>
      </nav>

      <button type="button" className="desktopApp">데스크톱앱 설치</button>
    </div>
  )
}

export default Nav
