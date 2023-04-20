import React from 'react'


function BasketItem({product,item}) {
  return (
    <div>
      <h3>{product.title}&{item.amount}</h3>
    </div>
  )
}

export default BasketItem
