
import './App.css';
import Header from './components/Header';
import { useState,useEffect } from 'react';
import Products from './products.json';
import Product from './components/Product';
import Basket from './components/Basket';



function App() {

  const [money,setMoney] = useState(10000)

   const [basket,setBasket]=useState([])

   const [total ,setTotal]=useState(0)

   useEffect(()=>{
    
    setTotal(basket.reduce((acc,item)=>{
      return acc + (item.amount * (Products.find(product=> product.id === item.id).price))
    },0)
  ) 
    console.log(basket);

  }, [basket])

  const resetBasket=()=>{
    setBasket([])
  }

  return(  
    <div className='App'>
      <h1>React ile Para Harcama</h1>
      
     <Header money={money} total={total} />

     { 
     
     Products.map(product=>(
      <Product key={product.id} product={product} basket={basket} setBasket={setBasket} total={total} money={money}/>
     ))

     }

<Basket total={total} resetBasket={resetBasket} basket={basket} products={Products} />
     
    </div>
    
  )
}

export default App;
