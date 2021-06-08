import React,{useContext, useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom'
import {UserContext} from '../App'

const Login = () => {

  const {state,dispatch}=useContext(UserContext)
  
  const history=useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

    const loginUser=async(e)=>{
        e.preventDefault()

        const res=await fetch("/signin",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email,password
          })
        });
          const data=await res.json();
          if(res.status===400||!data)
          {
            window.alert("Invalid Credentials")
          
          }
          else{
            dispatch({type:"USER",payload:true})
            window.alert("Successful Login")
            history.push('/')
          }
    }
        return (
            <>
            <section >
    <div className="container d-flex justify-content-center my-5 shadow p-3 mb-8 bg-white rounded">
      <div className="row my-2 mx-2 main">

        
          <h2 className="title pt-5 pb-3">Log In</h2>
          <form method="POST" className="myform">
            
            <div className="row rtwo">
              <div className="form-group col-md-6 ffour py-3"> 
              <input value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" type="email" className="form-control lm" placeholder="Email" /> </div>
            </div>
            
            <div className="row rfive">
              <div className="form-group col-md-6 ffive py-3"> 
              <input  value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password" type="password" className="form-control" placeholder="Password" /> </div>
            </div>
          
            <div className="row rseven">
              <div className="form-group col-md-6 fseven py-3">
                <button onClick={loginUser} type="submit" className="btn btn-primary"><span>LOGIN</span></button> </div>
              <div className="form-group col-md-6 feight py-3">
                <p className="text-muted">Already have an account?<br /><NavLink to="/signup">Sign up</NavLink></p>
              </div>
            </div>
          </form>

      </div>
    </div>
                                              

            </section>

            </>
        )
    }

    export default Login
