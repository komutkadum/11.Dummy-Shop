import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { loginContext } from '../App';
import { ROUTES } from '../services/routes';
import {useQuery} from '../utility/useQuery'

function Authentication() {
  let {user,setUser} = useContext(loginContext);
  let query = useQuery();
  if(user){
    return <Navigate to={ROUTES.HOME}/>
  }
  return (
    <div className='container-fluid'>
        <div className='row my-5'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            {query.get('type')==='login'?<Login setUser={setUser}/>:<SignUp />}
          </div>
        
        </div>

    </div>
  )
}

const SignUp = () => {
  return (
    <div className='card shadow bg-light'>
    <div className='card-body'>
  <form onSubmit={(e)=>e.preventDefault()}>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="inputEmail4">Email</label>
        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputPassword4">Password</label>
        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" required/>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="inputAddress">Address</label>
      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required/>
    </div>
    <div className="form-group">
      <label htmlFor="inputAddress2">Address 2</label>
      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" required/>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="inputCity">City</label>
        <input type="text" className="form-control" id="inputCity" required/>
      </div>
      <div className="form-group col-md-4">
        <label htmlFor="inputState">State</label>
        {/* <select id="inputState" className="form-control" required>
          <option value="23" selected>Choose...</option>
          <option value="23">...</option>
        </select> */}
      </div>
      <div className="form-group col-md-2">
        <label htmlFor="inputZip">Zip</label>
        <input type="text" className="form-control" id="inputZip" required/>
      </div>
    </div>
    <div className="form-group">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" required/>
        <label className="form-check-label" htmlFor="gridCheck">
          Check me out
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Sign in</button>
  </form> </div>
</div>);
}

const Login = ({setUser}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(true);
    localStorage.setItem('user','true')
  }
  
  return ( <div className='card shadow bg-light'>
  <div className='card-body'>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
      <small id="emailHelp" className="form-text text-muted">login with any username and password.</small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
    </div>
    <div className="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
</div>);
}

export default Authentication