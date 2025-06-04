import React from 'react'

const List = ({imgs}) => {
  return (
    <div className='list'>
      <h2>느낌별 스테이션</h2>
      
      <div className='img_list'>
        {
          imgs.map((img) => (
            <a href='#'><img className="imgbox" src={img.img} alt={img.id+":"+img.name}/></a>
          ))
        }
      </div>
    </div>
  )
}

export default List
