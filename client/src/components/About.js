import React ,{useEffect,useState} from 'react'
import profile from '../images/profile1.jpg'
import {useHistory} from 'react-router-dom'
const About = () => {
    const history=useHistory()
    const [userData, setUserData] = useState({})
    const callAboutPage=async ()=>{
        try {
            const res=await fetch("/about",{
                method:"GET",
                headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
                },
                credentials:"include"
              });

              const data=await res.json();
              console.log(data)
              setUserData(data);
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
        callAboutPage()

    }, [])
    return (
        <>
           <div className="container  my-5 shadow p-3 mb-5 bg-white rounded "  >
                <form method="GET">
                    <div className="row ">
                        <div className="col-md-4 "  style={{marginTop:"20px",width:"10%",height:"20%"}}>
                            <img src={profile} style={{height:"150%" ,width:"130%" }} />
                        </div>
                        
                        <div className="col-md-9 mt-6 " style={{marginLeft:"60px"}}>
                           <div className="profile " >
                               <br />
                               <h5>{userData.name}</h5>
                               <h6>{userData.work}</h6>
                               <p className="profile-rating mt-3 mb-5">RANKINGS:<span>1/10</span></p>

                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item"><a className="nav-link active"  role="tab" id="home-tab" data-toggle="tab" href="#home">About</a></li>
                                    
                                </ul>
                            
                           </div>
                        </div>
                        <div className="col-md-1 mt-12">
                            <br />
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="profile-work mt-0">
                                <p style={{fontWeight:"bolder"}}><br />WORK LINK</p>
                                <a style={{textDecoration:"none"}} target="blank" href="https://www.linkedin.com/in/ujjawal-golani-726823202/">Linkedin</a><br />
                                <a style={{textDecoration:"none"}} target="blank" href="https://www.linkedin.com/in/ujjawal-golani-726823202/">The Sparks Foundation</a><br />
                                <a style={{textDecoration:"none"}} target="blank" href="https://www.linkedin.com/in/ujjawal-golani-726823202/">MERN Developer</a><br />
                                <a style={{textDecoration:"none"}} target="blank" href="https://www.linkedin.com/in/ujjawal-golani-726823202/"> Instagram</a><br />
                            </div>
                        </div>  
                        <div className="col-md-8  about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6"  style={{fontWeight:"bolder",marginTop:"20px",marginLeft:"-240px",width:"30%",height:"20%"}}>
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6"  style={{color:"lightBlue",fontWeight:"bolder",marginTop:"20px",width:"30%",height:"20%"}}>
                                            <p>{userData._id}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mt-3"  style={{fontWeight:"bolder",marginTop:"20px",marginLeft:"-240px",width:"30%",height:"20%"}}>
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6"  style={{color:"lightBlue",fontWeight:"bolder",marginTop:"20px",width:"30%",height:"20%"}}>
                                            <p>{userData.name}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6 mt-3"  style={{fontWeight:"bolder",marginTop:"20px",marginLeft:"-240px",width:"30%",height:"20%"}}>
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6"  style={{color:"lightBlue",fontWeight:"bolder",marginTop:"20px",width:"30%",height:"20%"}}>
                                            <p>{userData.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mt-3"  style={{fontWeight:"bolder",marginTop:"20px",marginLeft:"-240px",width:"30%",height:"20%"}}>
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6"  style={{color:"lightBlue",fontWeight:"bolder",marginTop:"20px",width:"30%",height:"20%"}}>
                                            <p>{userData.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mt-3"  style={{fontWeight:"bolder",marginTop:"20px",marginLeft:"-240px",width:"30%",height:"20%"}}>
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6"  style={{color:"lightBlue",fontWeight:"bolder",marginTop:"20px",width:"30%",height:"20%"}}>
                                            <p>{userData.work}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
     
                    </div>
                </form>
            </div>
        </>
    )
}

export default About
