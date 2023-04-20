import React from 'react'
import BasketItem from './BasketItem'

function Basket({total,resetBasket,basket,products}) {
  return (
    <div>
      <h2>harcama özeti</h2>
      
      { basket.map(item=>(
            <BasketItem key={item.id} item={item} product={products.find(p=>p.id === item.id)}/>
          ))} 
        



      <h3>Toplam: ${total}</h3>
      <button className='basket' onClick={resetBasket}>Sepeti boşalt</button>

    

    </div>
  )
}

export default Basket
