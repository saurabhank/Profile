import React from 'react'

const Errorpage = () => {
    return (
        <>
         <div className="error-404">
            <div>
            <div className="error-code m-b-10 m-t-20">404 <i className="fa fa-warning" /></div>
            <h2 className="font-bold">Oops 404! That page can’t be found.</h2>
            <div className="error-desc">
                Sorry, but the page you are looking for was either not found or does not exist. <br />
                Try refreshing the page or click the button below to go back to the Homepage.
                <div><br />
               <br />
                <a href="/" style={{fontSize:"20px"}} className="btn-light"> Go back to Homepage</a>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Errorpage
