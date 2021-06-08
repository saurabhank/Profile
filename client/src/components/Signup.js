import React ,{useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom'
import signpic from '../images/signup.jpg'
const Signup = () => {

    const [user, setUser] = useState({name:"",email:"",phone:"",work:"",password:"",cpassword:""})
    const history=useHistory()
    let name,value;
    const handleInputs=(e)=>{
    
      console.log(e)
      name=e.target.name
      value=e.target.value

      setUser({...user,[name]:value})
    }

    const postData=async (e)=>{
      e.preventDefault();
      const {name,email,phone,work,password,cpassword}=user;

      const res=await fetch("/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,phone,work,password,cpassword
        })
      });
      const data=await res.json();
      if(res.status===422||!data)
      {
        window.alert("Invalid Registration")
        console.log("Invalid Registration")
      }
      else{
        window.alert("Successful Registration")
        console.log("Successful Registration")

        history.push('/login')
      }
    }

    return (
        <>
        <section >
<div className="container d-flex justify-content-center my-5 shadow p-3 mb-5 bg-white rounded">
  <div className="row my-2 mx-2 main">

    <div className="col-md-8 col-12 mycol">
     
      <h2 className="title pt-5 pb-3">Sign up</h2>
      <form method="POST" className="myform">
        <div className="row rone">
          <div className="form-group col-md-6 fone py-3"> 
          <input name="name" value={user.name} onChange={handleInputs} autocomplete="off" type="text" className="form-control" placeholder="Name" /> 
          </div>
        </div>
        <div className="row rtwo">
          <div className="form-group col-md-6 ffour py-3"> 
          <input name="email" value={user.email} onChange={handleInputs} autocomplete="off" type="email" className="form-control lm" placeholder="Email" /> </div>
        </div>
        <div className="row rthree">
          <div className="form-group col-md-6 ffive py-3">
             <input name="phone" value={user.phone} onChange={handleInputs} autocomplete="off" type="number" className="form-control" placeholder="Phone" /> </div>
        </div>
        <div className="row rfour">
          <div className="form-group col-md-6 ffive py-3"> 
          <input name="work" value={user.work} onChange={handleInputs} autocomplete="off" type="text" className="form-control" placeholder="Profession" /> </div>
        </div>
        <div className="row rfive">
          <div className="form-group col-md-6 ffive py-3">
             <input name="password" value={user.password} onChange={handleInputs} autocomplete="off" type="password" className="form-control" placeholder="Password" /> </div>
        </div>
        <div className="row rsix">
          <div className="form-group col-md-6 ffive py-3"> 
          <input name="cpassword" value={user.cpassword} onChange={handleInputs} autocomplete="off" type="password" className="form-control" placeholder="Confirm Password" /> </div>
        </div>
        <div className="row rseven">
          <div className="form-group col-md-6 fseven py-3">
             <button onClick={postData} type="submit" className="btn btn-primary"><span>Create account</span></button> </div>
          <div className="form-group col-md-6 feight py-3">
            <p className="text-muted">Already have an account?<br /><NavLink to="/login">Log in</NavLink></p>
          </div>
        </div>
      </form>
      </div>
    {/*right-column*/}
    <div className="col-md-4 col-12 xcol">
        <br /><br /><br />
        
      <img src={signpic} width="100%" height="75%" /> 
    </div>
  </div>
</div>
							                            

        </section>

        </>
    )
}

export default Signup
