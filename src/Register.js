import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
    return(
        <>
        <div className="bodybg">
	

    <nav className="navbar navbar-default header">
      <div className="container-fluid">
        
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#"><img src="images/brand.png" height="70"></img></a>
        </div>
    
        
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Startups">Startups</Link></li>
            <li><Link to="/Register">Register</Link></li>
            <li><Link to="/Login">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    
    
    <div className="container">
        <div className="row">
            <h3 className="text-center">Join KawoLegal. Sign up to get your Startup listed now!</h3>
        </div>
    </div>
    
    <div className="container">
        <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Full Name</label>
        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Full Name"></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Email address</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Email"></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Confirm Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"></input>
      </div>
      <div className="form-group">
      </div>
      <button type="submit" className="btn btn-default Sign-up">Sign up</button>
    </form>
    </div>
    
    
    
    
    
    </div>
    
    
    <footer className="container-fluid footer">
        <div className="row">
          <div className="col-md-6">
            <p className="text-color text-center">&copy 2017 kawolegal. All Rights Reserve</p>
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
    )
}

export default Register;