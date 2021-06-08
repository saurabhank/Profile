import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom'
import {UserContext} from '../App'

const Navbar = () => {
  const {state,dispatch}=useContext(UserContext)
  const RenderMenu=()=>{
    if(state)
    {
      return (
        <>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
        </>
      )
    }
    else{
      return(
        <>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Registration</NavLink>
        </li>
        </>
      )
    }
  }

    return (
        <>
    <nav className="navbar navbar-light bg-light  navbar-expand-md">
    <div class="container-fluid">
    <NavLink className="navbar-brand" to="#"><b><span style={{color:"blue",fontFamily:"cursive",fontSize:"larger"}}>UGInc.</span></b></NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <RenderMenu />
         
      </ul>
      
  </div>
  </div>
    </nav>
        
        </>
    )
}

export default Navbar
