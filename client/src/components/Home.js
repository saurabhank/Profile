import React,{useState,useEffect} from 'react'

const Home = () => {     
  const [username, setUsername] = useState('')
  const [show,setShow]=useState(false)
  const userHomepage=async ()=>{
      try {
          const res=await fetch("/getdata",{
              method:"GET",
              headers:{
                "Content-Type":"application/json"
              },
            });

            const data=await res.json();
            console.log(data)
            setUsername(data.name);
            setShow(true)
            if(!res.status===200)
            {
                const error=new Error(res.error)
                throw error
            }

      } catch (error) {
          console.log(error)
         
      }
  }

  useEffect(() => {
      userHomepage()

  }, [])


    return (
        <>
<header>
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    </ol>
    <div className="carousel-inner" role="listbox">
      {/* Slide One - Set the background image for this slide in the line below */}
      <div className="carousel-item active" style={{backgroundImage: 'url("https://source.unsplash.com/LAaSoL0LrYs/1920x1080")'}}>
        <div className="carousel-caption d-none d-md-block">
          <h1 style={{fontWeight:"bolder"}}className="display-4">Hello,{username}</h1>
          <h2 className="display-4">{show?"Happy to see you back\nWELCOME TO UGInc.":"WELCOME TO UGInc."}</h2><br />
         
        </div>
      </div>
      
     
  </div>
  </div>
</header>


            </>
    )
}

export default Home
