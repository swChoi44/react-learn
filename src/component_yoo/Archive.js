import React from 'react'

const Archive = () => {

  return (
    <div className='archive'>
      <div className='title'>
        <h2>Archives</h2>
        <h3>(1970s)</h3>
      </div>
      
      <div className='contents'>
        {
          Array.from({ length:30 }, (_, idx) => (
            <ImgBox key={idx} idx={idx}/>
          ))
        }
      </div>
    </div>
  )
}

export default Archive

const ImgBox = ({idx}) => {
  let imgPath = "/img_yoo/f" + idx + ".jpg"

  return(
    <div className='imgbox'>
      <img src={imgPath} alt='/'/>
    </div>
  )
}

/*
{
  Array.from({ length:30 }, (_, idx) => (
    <ImgBox key={idx} idx={idx}/>
  ))
}

const ImgBox = ({idx}) => {
  let imgPath = "/img_yoo/f" + idx + ".jpg"

  return(
    <div>
      <img src={imgPath} />
    </div>
  )
}
 */