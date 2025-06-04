import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Header from './component/Header'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      {/* 
        react Router : 페이지 간 이동을 처리하기 위해 사용되는 "라이브러리리" - 새로고침없이 서브페이지 컴포넌트만 업데이트

        url기반 화면 전환 : 사용자가 입력한 url에 따라 다른 컴포넌트를 보여줌
        spa(single page application) : 페이지 새로고침 없이 화면을 전환

        0. 라이브러리 설치
          npm install react-router-dom
          *package.json에서 설치여부와 버전 확인 가능.

        1. BrowserRouter로 앱 감싸기 (in index.js)
          -> 리액트 라우터가 url 관리할 수 있도록 도와주는 컴포넌트
          가장 마지막에 렌더되는 페이지인 index.js 파일에서 렌더되는 컴포넌트를 감싸서 사용
        
        2. 기본 라우팅 구현 (url 등록)
          Routes, Route 컴포넌트 사용하여 url 경로에 따라 다른 컴포넌트 렌더링

          Routes : 여러 Route를 감싸는 컨테이너
          Route : 특정 경로(path)에 매칭될 때 렌더링할 컴포넌트를 지정
          
          path: URL 경로 지정. 기본값(보통 home)은 /
          element: 렌더링할 컴포넌트 지정

        3. 네비게이션 추가 (for url 이동)
          페이지간 이동은 Link 컴포넌트 사용 (a태그와 같은 역할, css에서 a 초기화하면 적용됨)
          to: 이동할 경로 지정
          usually, in Header
      */}

      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>

      <Footer/> {/* <- 눌러도 바뀌면 안되니까 Routes 바깥에 사용 */}
    </div>
  )
}

export default App

/* -review

  Router for SPA

  1) npm install react-router-dom
  2) BrowerRouter (in index.js)

	  import {BrowserRouter} from 'react-router-dom'

	  (in root.render)
	  <BrowserRouter>
	  	<App />
	  </BrowserRouter>

  3) Routes, Route - path, element (in App.js)
  4) Link - to ( in components)
*/

