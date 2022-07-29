import React, { useContext } from 'react'
import '../styles/header.css'
import '../styles/animate.css'
import {  NavLink } from 'react-router-dom';
import { useQuery } from '../utility/useQuery';
import { loginContext } from '../App';
import { deleteAllLocalstorage } from '../utility/localstorage';
import { ROUTES } from '../services/routes';

function Header() {

let query = useQuery();
let {user,setUser,cartCount} = useContext(loginContext);

function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
function logout() {
    if(!window.confirm('Are you sure want to logout?')) return;
    setUser(false);
    deleteAllLocalstorage();
    window.location.reload();
}
  return (
    <div className='bg-dark container-fluid'>
        <div className='container'>
            <div className='bg-dark  pt-4 pb-3 d-flex align-items-center justify-content-between'>
                {/* navbar mobile */}
                <div className='' style={{display:'flex',alignItems:'center'}}>
                    <div className="d-md-none">
                        <button className="btn btn-dark border" onClick={w3_open}><i className='fas fa-bars'></i></button>
                    </div>&nbsp;
                    {/* end of navbar mobile */}
                    <NavLink to={ROUTES.HOME} style={({isActive})=>{return {color:isActive?'white':'#bdc3c7'}}} className='text-decoration-none'>
                        <h3 className='font-weight-bolder title-sm m-0'>DUMMY SHOP</h3>
                    </NavLink>
                </div>
                {
                    user?<div className='font-weight-bold d-flex text-muted'>
                    <NavLink to={ROUTES.CART} className="text-muted text-decoration-none">
                        <h6 className='header_login mr-3'>
                            <span style={{position:'relative'}}>
                                <i className='fas fa-shopping-cart'></i>
                                <span style={{position:'absolute',left:'7px',top:'-18px'}} className='badge badge-danger badge-pill border'>
                                 {cartCount}
                                </span> 
                            </span>&nbsp;
                            cart
                        </h6>
                    </NavLink>
                    <h6 className='header_login' onClick={logout}><i className='fas fa-sign-out-alt'></i> logout</h6>
                </div>:<div className='font-weight-bold d-flex text-muted'>
                    <NavLink to={ROUTES.LOGIN} className="text-muted text-decoration-none">
                        <h6 className='header_login mr-2'><i className='fas fa-sign-in-alt'></i> Login</h6>
                    </NavLink>
                    <NavLink to={ROUTES.SIGNUP} className="text-muted text-decoration-none">
                        <h6 className='header_login'><i className='fas fa-cash-register'></i> Signup</h6>
                    </NavLink>
                </div>
                }
                
                
            </div>
            <div className='d-none d-sm-none d-md-block'>
                <ul className='header_category '>
                    <NavLink className={`li ${query.get('category')==='electronics'?'header_active':''} text-sm`} to={ROUTES.ELECTRONIC} >
                        <li>
                            <i className='fas fa-microchip'></i> Electronic
                        </li>
                    </NavLink>
                    <NavLink className={`li ${query.get('category')==='jewelery'?'header_active':''} text-sm`} to={ROUTES.JEWELERY}>
                        <li>
                            <i className='fas fa-life-ring'></i> Jewelery
                        </li>
                    </NavLink>
                    <NavLink className={`li ${query.get('category')==="men's clothing"?'header_active':''} text-sm`} to={ROUTES.MENS_CLOTHING} >
                        <li>
                            <i className='fas fa-male'></i> men's clothing
                        </li>
                    </NavLink>
                    <NavLink className={`li ${query.get('category')==="women's clothing"?'header_active':''} text-sm`} to={ROUTES.WOMENS_CLOTHING} >
                        <li>
                            <i className='fas fa-female'></i> women's clothing
                        </li>
                    </NavLink>
                </ul>
            </div>

            <div className="w3-sidebar bg-secondary w3-bar-block w3-animate-left" style={{display:'none'}} id="mySidebar">
                <button onClick={w3_close} className="w3-bar-item btn btn-lg">Close &times;</button>
                <ul className="list-group">
                    <NavLink to={ROUTES.ELECTRONIC} className="li" onClick={w3_close}>
                        <li className="list-group-item list-group-item-action"><i className='fas fa-microchip'></i> Electronic</li>
                    </NavLink>
                    <NavLink to={ROUTES.JEWELERY} className="li list-group-item-action" onClick={w3_close}>
                        <li className="list-group-item"><i className='fas fa-life-ring'></i> Jewelery</li>
                    </NavLink>
                    <NavLink to={ROUTES.MENS_CLOTHING} className="li list-group-item-action" onClick={w3_close}>
                        <li className="list-group-item"><i className='fas fa-male'></i> men's clothing</li>
                    </NavLink>
                    <NavLink to={ROUTES.WOMENS_CLOTHING} className="li list-group-item-action" onClick={w3_close}>
                        <li className="list-group-item"><i className='fas fa-female'></i> women's clothing</li>
                    </NavLink>
                </ul>
            </div>
            
        
        </div>

        

    </div>
  )
}

export default Header