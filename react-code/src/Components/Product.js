import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { loginContext } from '../App';
import { PRODUCTS_ENDPOINT } from '../services/endpoints';
import { fetchApi } from '../services/fetchApi';
import Loader from '../utility/Loader';

function Product() {
  let params = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [addToCartButton, setAddToCartButton] = useState(true);
  const {user,setCartCount} = useContext(loginContext);
  useEffect(()=>{
    window.scrollTo(0, 0)
    let finalUrl = PRODUCTS_ENDPOINT.SINGLE_PRODUCT+params.productId;
    fetchApi(setLoading,setProduct,finalUrl);
    let tempCart = JSON.parse(localStorage.getItem('cart') || "[]");
    console.log(tempCart)
    for(let i=0;i<tempCart.length;i++){
        if(tempCart[i].id===parseInt(params.productId)){
            setAddToCartButton(false);
            break;
        }
    }
  },[])
  const addToCart = () => {
    if(!addToCartButton) return;
    let tempCart = JSON.parse(localStorage.getItem('cart') || "[]");
    tempCart.unshift(product);
    localStorage.setItem('cart',JSON.stringify(tempCart));
    setAddToCartButton(false)
    localStorage.setItem('cartCount',tempCart.length);
    setCartCount(prev=>prev+1)
  }
  return (
    <div className='container'>
        <div className='row'>
            {
                loading?
                <div className='col-md-12 text-center bg-white py-5 jumbotron'>
                    <Loader />
                </div>:
                <>
                <div className='col-md-1'></div>
                <div className='col-md-10  m-4 mb-5'>
                    <div className='row'>
                        <div className='col-md-7 d-flex justify-content-center align-items-center  p-3 text-center'>
                            <img src={product.image} alt={product.title} style={{maxWidth:'100%',height:'400px'}}/>
                        </div>
                        <div className='col-md-5 border p-3'>
                            <h3 className='font-weight-bold'>{product.title}</h3>
                            <div className="card-text">
                                <span className="badge badge-success p-2 mb-1">{product.rating.rate} <i className='fas fa-star text-white'></i></span> ({product.rating.count})<br/>
                                <h4 className='mt-2 mb-3'>
                                    <span className='font-weight-bold mb-1  ' style={{letterSpacing:'1px'}}>
                                        <i className='fas fa-dollar-sign'></i>{product.price} </span>&nbsp;
                                    <span style={{textDecoration:'line-through'}}> {(product.price+31)}</span><br/>
                                </h4>
                            </div>
                            {/* accordion */}
                            <div className="accordion" id="accordionExample">
                                {/* description */}
                                <button className="btn rounded-0 border btn-block btn-lg btn-dark" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Description <i className='fas fa-caret-down'></i>
                                </button>
                                <div id="collapseOne" className="collapse p-2" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    {product.description}
                                </div>
                                {/* end of description */}
                                <button className="btn btn-block rounded-0  border btn-lg btn-dark collapsed"  type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Shipping & Returns <i className='fas fa-caret-down'></i>
                                </button>
                                <div id="collapseTwo" className="collapse p-2 " aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    - Free express shipping<br/>
                                    - 30 days try at home<br/>
                                    - Not happy? Full refund<br/>
                                </div>
                                <button className="btn btn-block rounded-0 border btn-lg btn-dark collapsed"  type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Category <i className='fas fa-caret-down'></i>
                                </button>
                                <div id="collapseThree" className="collapse p-2" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    {product.category}
                                </div>
                            </div>
                            {/* end of accordion */}
                            {user&&
                                <button onClick={addToCart} className={`btn ${addToCartButton?'bg-warning':'bg-success text-white'} font-weight-bold btn-block my-3 text-mute`}>
                                    {addToCartButton?
                                    <>Add to cart <i className='fas fa-cart-plus'></i></>:
                                    <>Added to cart <i className='fas fa-check-circle'></i></>
                                    }
                                </button>
                            }
                        </div>
                    </div>
                </div>
                </>
            }
            
        </div>
    </div>
  )
}

export default Product