import {useState} from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import "./App.css"

export default function App()

{
const [cart,setCart]=useState([]);
const[totalAmt,setAmt] = useState(0);
const[searchItem,setSearchItem] = useState([]);
const products=[
  {
    id:1,
    name:"Laptop",
    price:56000, 
    image:""
  },
  {
    id:2,
    name:"Mobile",
    price:30000,
    image:""
  },{
    id:3,
    name:"Charger",
    price:1000,
    image:""
  }
];

function addToCart(product)
{
  setCart([...cart,product]);
  setAmt(totalAmt+product.price);
}

function removeFromCart(index)
{
const updatedCart=cart.filter((_,i)=>i!==index);
setCart(updatedCart)
setAmt(totalAmt-cart[index].price);
}

function searchProduct(e){
  e.preventDefault();
  const text = e.target.bar.value;
  // console.log(text)
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(text)
  );
  setSearchItem(filteredProducts);
}


  return(
    <div className='container'>
      <Header cartCount={cart.length} searchProduct={searchProduct}/>
      <ProductList products={searchItem.length > 0 ? searchItem : products} addToCart={addToCart}/>
      <Cart totalAmt={totalAmt} cart={cart} removeFromCart={removeFromCart}/>
    </div>
  );

}