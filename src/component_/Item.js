import React from 'react'

const Item = () => {
  let items = [
    {
      id: 1,
      name: "Debossed Multi Logo Nylon Shark Full Zip Down Jacket",
      price: "W1,079,000",
      img: "/img/image-1.jpg"
    },
    {
      id: 2,
      name: "Baby Milo 25th Anniv. Plush Doll Tee",
      price: "W164,000",
      img: "/img/image-2.jpg"
    },
    {
      id: 3,
      name: "Christmas Ape Head Tee",
      price: "W164,000",
      img: "/img/image-3.jpg"
    },
    {
      id: 4,
      name: "Aurora Ape Head Tee",
      price: "W164,000",
      img: "/img/image-4.jpg"
    },
    {
      id: 5,
      name: "Asia Camo Bomber Jacket",
      price: "W1,056,000",
      img: "/img/image-5.jpg"
    },
    {
      id: 6,
      name: "Damage Relaxed Fit Sweater",
      price: "W563,000",
      img: "/img/image-6.jpg"
    },
    {
      id: 7,
      name: "Asia Camo Coach Jacket",
      price: "W557,000",
      img: "/img/image-7.jpg"
    },
    {
      id: 8,
      name: "Gore-Tex Wind Stopper 1st Camo Relaxed Coach Jacket",
      price: "W774,000",
      img: "/img/image-8.jpg"
    },
  ]

  return (
    <main>
      <h2 className='title'>신상품</h2>
      <div className='item_list'>
        {
          items.map((item) => (
            <ItemBox key={item.id} item={item}/>
          ))
        }
      </div>
    </main>
  )
}

export default Item

const ItemBox = ({item}) => {
  return(
    <div className='itembox'>
      <a href='#'><img src={item.img} alt={item.name}/></a>
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>
  )
}