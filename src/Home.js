import React from 'react'
import { Link } from 'react-router-dom';



function Home() {
    return(
        <>
         <div className="container-fluid body">
    <div className="bgimage">
      
        <div className="container-fluid">
         
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">KAWO LEGAL</a>
          </div>

          <div className="overlay"></div>
         
            
            <ul className="nav navbar-nav navbar-right links">
            <li><Link to="/">Home</Link></li>
          <li><Link to="/Startups">Startups</Link></li>
          <li><Link to="/Register">Register</Link></li>
          <li><Link to="/Login">Login</Link></li>
              
            </ul>
          </div>
          <div className="content text-center">
            <h1 className="text-color">KAWOLEGAL</h1>
            <p className="text-color">A collaborative ecosystem for problem
              solvers and support for startups</p>
            <button type="button" className="btn btn-primary navbar-btn">Register Now!</button>
          </div>
    </div>
  </div>
      
   
  

  <footer className="container-fluid footer">
    <div className="row">
      <div className="col-md-6">
        <p className="text-color text-center">copy 2017 kawolegal. All Rights Reserve</p>
      </div>
      <div className="col-md-6 text-center">
        <a href="#" className="fa fa-facebook icon"></a>
        <a href="#" className="fa fa-twitter icon"></a>
        <a href="#" className="fa fa-linkedin icon"></a>
        <a href="#" className="fa fa-instagram icon"></a>

      </div>
    </div>
  </footer>

  </>
    );
 }

 export default Home;