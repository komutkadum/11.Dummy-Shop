import React from 'react'

function Footer() {
  return (
    <div className='container-fluid bg-dark text-white py-4'>
        <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-10'>
                <div className='row'>   
                    <div className='col-md-4 text-center text-lg-left'>
                        <h5>Electronic</h5>
                        <h5>Jewelery</h5>
                        <h5>Men's clothing</h5>
                        <h5>Women's clothing</h5>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-4 text-center text-lg-left'>
                        <h5>Faq</h5>
                        <h5>About</h5>
                        <h5>Store</h5>
                        <h5>Contact</h5>
                    </div>
                    <div className='col-md-1 text-center text-lg-right'>
                        <img src={process.env.PUBLIC_URL+'/store.png'} alt='placehodler'/>
                    </div>
                </div>
            </div>
        </div>
        <hr className='bg-white'/>
        <div className='row '>
            <div className='col-md-1'></div>
            <div className='col-md-10'>
                <div className='row'>
                    <div className='col-md-4 my-2 text-center text-lg-left'>
                        <h3>Subscribe to our mailing list</h3>
                        <form className='d-flex'>
                            <input className='form-control mr-2' placeholder='your email address' required/>
                            <button type='submit' className='btn btn-secondary'>Subscribe</button>
                        </form>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-4 my-2 text-center text-lg-left'>
                        <h3>Follow us</h3>
                        <div className='btn-group'>
                            <button className='btn btn-primary border mr-2'><i className='fab fa-facebook-f'></i></button>
                            <button className='btn btn-danger border mr-2'><i className='fab fa-instagram'></i></button>
                            <button className='btn btn-dark border mr-2'><i className='fab fa-github'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className='bg-white'/>
        <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-10 text-center'>
                Kadum Komut private limited network ©kadumkomut2826@gmail.com
            </div>
        </div>
    </div>
  )
}

export default Footer