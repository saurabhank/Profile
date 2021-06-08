import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
const Contact = () => {
   const history=useHistory()
    const [userData, setUserData] = useState({name:"",email:"",phone:"",message:""})
    const userContact=async ()=>{
        try {
            const res=await fetch("/getdata",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                  "Content-Type":"application/json"
                },
                credentials:"include"
              });

              const data=await res.json();
              console.log(data)
              setUserData({...userData,name:data.name,email:data.email,phone:data.phone});
              if(!res.status===200)
              {
                  const error=new Error(res.error)
                  throw error
              }

        } catch (error) {
            console.log(error)
            history.push('/login')
        }
    }

    useEffect(() => {
        userContact()

    }, [])

    const handleInputs=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setUserData({...userData,[name]:value})
    }

    const formData=async(e)=>{
        e.preventDefault();
        const {name,email,phone,message}=userData;

        const res=await fetch("/contact",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              name,email,phone,message
            })
          });
            const data=await res.json();
            if(!data)
            {
                console.log("Message not sent")
            }
            else{
                window.alert("Message Sent")
                setUserData({...userData,message:""})
            }

    }
    return (
        <>
        <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">Get in Touch</h2>
       
            <div className="container d-flex justify-content-center my-5 shadow p-3 mb-5 bg-white rounded">
             <div className="row">
           
            <div className="col-md-12 mb-md-0 mb-5">
            <form method="POST"id="contact-form" name="contact-form">
       
                <div className="row">
               
                <div className="col-md-6">
                    <div className="md-form mb-0">
                    <input onChange={handleInputs} value={userData.name} type="text" id="name" name="name" className="form-control" placeholder="Name" />
                    <br />
                    </div>
                </div>
             
                <div className="col-md-6">
                    <div className="md-form mb-0">
                    <input onChange={handleInputs}  value={userData.email} type="text" id="email" name="email" className="form-control" placeholder="Email"  />
                   
                    </div>
                </div>
               
                </div>
               
                <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                    <input onChange={handleInputs} value={userData.phone} type="text" id="subject" name="phone" className="form-control" placeholder="Phone"  />
                    <br />
                    </div>
                </div>
                </div>
               
                <div className="row">
              
                <div className="col-md-12">
                    <div className="md-form">
                    <textarea onChange={handleInputs} placeholder="Your Message" type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
                    <br />
                    </div>
                </div>
                </div>
                
                <div className="text-center text-md-left">
                <button onClick={formData} className="btn btn-primary">SEND</button>
            </div>
            </form>
            
            
            </div>
            
        </div>
        </div>
        </section>
       
        </>
    )
}

export default Contact
