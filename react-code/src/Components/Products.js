import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/product.css'
import { useQuery } from '../utility/useQuery'
import { PRODUCTS_ENDPOINT } from '../services/endpoints'
import Loader from '../utility/Loader'
import { fetchApi } from '../services/fetchApi'
import { ROUTES } from '../services/routes'

function Products() {
  let query = useQuery();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    let finalUrl
    if(query.get('category')){
        finalUrl = PRODUCTS_ENDPOINT.SPECIFIC_CATEGORY_PRODUCT+query.get('category');
    }else {
        finalUrl = PRODUCTS_ENDPOINT.ALL_PRODUCT;
    }
    fetchApi(setLoading,setProducts,finalUrl);
  },[query])
  return (
    <>
    <div className='container-fluid my-5'>
        <div className='row'>
            {
                loading?
                <div className='col-md-12 text-center bg-white py-5 jumbotron'>
                    <Loader />
                </div>:
                <>
                <div className='col-md-1'></div>
                <div className='col-md-10'>
                    <div className='row'>
                    {
                        products.map((product)=>(
                            <ProductList key={product.id} product={product}/>
                        ))
                    }
                    </div>
                </div>
                </>
            }
            
        </div>
    </div></>
  )
}

export const ProductList = ({product}) => {
    return (<>
        <div className='col-md-4 mb-4'>
            <NavLink className="card product_card text-decoration-none bg-light text-dark" title='view' to={ROUTES.PRODUCTS+'/'+product.id}>
                <div className='card-header text-center bg-white'>
                    <img src={product.image} alt='helloworld' style={{maxWidth:'100%',height:'200px'}}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-truncate">{product.title}</h5>
                    <p className="card-text">
                        <span className="badge badge-success p-2 mb-1">{product.rating.rate} <i className='fas fa-star text-white'></i></span> ({product.rating.count})<br/>
                        <span className='font-weight-bold mb-1  ' style={{letterSpacing:'1px'}}><i className='fas fa-dollar-sign'></i>{product.price} </span>&nbsp;
                        <span style={{textDecoration:'line-through'}}> {(product.price+31)}</span><br/>
                        <span className='text-muted'>{product.category}</span>
                    </p>
                </div>
            </NavLink>  
        </div>   </>
    );
}



export default Products