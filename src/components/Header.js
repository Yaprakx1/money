import React from 'react'


function Header({money, total}) {

   
  return (
    <div>
{
    money - total === 0 && (
        <h2>Maalesef Harcayacak Paranız Kalmadı</h2>  
    )
}
{
    total === 0 &&(
        <h2>Harcamak için ${money} kadar paranız var </h2>  
    )
}
{
    total > 0 && money - total !==0 && (
        <h2>Harcamak için ${money - total} kadar paranız var </h2>  
    )
}
        <div className='money'>
     harcamak için ${money-total} paraniz var!
     </div>
     
    </div>
  )
}

export default Header
