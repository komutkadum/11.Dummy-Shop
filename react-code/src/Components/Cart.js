import React,{useContext, useEffect, useRef, useState} from 'react'
import { Navigate } from 'react-router-dom';
import { loginContext } from '../App';
import { ROUTES } from '../services/routes';
import '../styles/cart.css'

function Cart() {
  const [cart,setCart] = useState(JSON.parse(localStorage.getItem('cart')||'[]'));
  const [cartTotal, setCartTotal] = useState(0);
  const {setCartCount,user} = useContext(loginContext);
  const priceRef = useRef();
  useEffect(()=>{
      let tempCart = JSON.parse(localStorage.getItem('cart')||'[]');
      let total = Math.ceil(tempCart.reduce((total,num)=>total+num.price,0));
      setCartTotal(total);
  },[cart])

  const removeProductFromCart = (id) => {
    if(!window.confirm('Are you sure want to remove?')) return;
    let temp = [...cart];
    temp = temp.filter((item)=>item.id!==id);
    setCart([...temp]);
    localStorage.setItem('cart',JSON.stringify(temp));
    localStorage.setItem('cartCount',temp.length);
    setCartCount(temp.length)
  }

  if(!user){
    return <Navigate to={ROUTES.HOME}/>    
  }

  return (
    <div className='container-fluid my-5'>
        <div className='row mx-2'>
          <div className='col-md-1'></div>
          <div className='col-md-10 '>
            <button className='btn btn-block btn-danger btn-lg mb-2' onClick={()=>priceRef.current.scrollIntoView()} disabled={cart.length===0?true:false}>
              Scroll to Checkout page <i className='fas fa-arrow-circle-down'></i>
            </button>
            <div className='row'>
              <div className='col-md-7'>
                { 
                  cart.map((item)=>(
                      <CartList key={item.id} removeProductFromCart={removeProductFromCart} product={item}/>
                  ))
                }
              </div>
              <div className='col-md-5'>
                  {/* price details */}
                <div className='row my-4 cart-sticky-top' ref={priceRef}>
                  <div className='col-md-12'>
                    <div className='card text-muted' >
                      <div className='card-header text-center'>
                        <h4 className='font-weight-bold text-muted'>Price details</h4>
                      </div>
                      <div className='card-body' style={{fontSize:'1.2rem'}}>
                        <div className='row'>
                          <div className='col'>Price</div>
                          <div className='col text-right'><i className='fas fa-dollar-sign'></i>{cartTotal}</div>
                        </div>
                        <div className='row'>
                          <div className='col'>Discount</div>
                          <div className='col text-right text-success'>- <i className='fas fa-dollar-sign'></i>{Math.round(cartTotal-((cartTotal/100)*81))}</div>
                        </div>
                        <div className='row'>
                          <div className='col'>Delivery Charge</div>
                          <div className='col text-right'>Free</div>
                        </div>
                        <hr/>
                        <div className='row' style={{fontSize:'1.4rem',fontWeight:'bold'}}>
                          <div className='col'>Total Amount</div>
                          <div className='col text-right'><i className='fas fa-dollar-sign'></i>{Math.round(cartTotal-((cartTotal/100)*19))}</div>
                        </div>
                        <button className='btn btn-block btn-primary mt-3' disabled={cart.length===0?true:false}><i className='fas fa-cart-arrow-down'></i> place order</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of price details */}
              </div>
            </div>
              
          </div>
        </div>
    </div>
  )
}

const CartList = ({product,removeProductFromCart}) => {
  return (
    <div className='row my-4  text-white'>

      <div className='col-md-4 bg-white text-center border d-flex align-items-center justify-content-center'>
        <img src={product.image} alt={product.title} style={{maxWidth:'100%',height:'150px'}}/>
      </div>
      <div className='col-md-8 border bg-dark p-4 d-flex justify-content-center flex-column'>
        <h4>{product.title}</h4>
        <h6>{product.category}</h6>
        <h4 className='mt-2 mb-3'>
            <span className='font-weight-bold mb-1 ' style={{letterSpacing:'1px'}}>
                <i className='fas fa-dollar-sign'></i>{product.price} </span>
            <span style={{textDecoration:'line-through'}}> {(product.price+31)}</span><br/>
        </h4>
        <button onClick={()=>removeProductFromCart(product.id)} className='btn btn-danger btn-sm'><i className='fas fa-trash'></i> remove</button>
      </div>
      </div>
  );
}

export default Cart