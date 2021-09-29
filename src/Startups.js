import React from 'react'
import { Link } from 'react-router-dom';

function Startups() {
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
                
    <div className="container background-color">
        <div className="row">
            <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="input-group">
                          <input type="text" className="form-control" placeholder="search Startup by name or industry" aria-describedby="basic-addon2"></input>
                              <span className="input-group-addon" id="basic-addon2">🔍Search</span>
                    </div>
                </div>
            <div className="col-md-1"></div>
        </div>
    </div>
    
    
    
    
    <div className="container">
        <div className="row">
            <div className="col-md-2"></div>
                <div className="col-md-2">
                    <img src="images/2.jpg" className="img-responsive"></img>
                </div>
                    <div className="col-md-7"><h3 className="Think">Think and Zoom</h3>
                    <h5>Providing solutions for the visually impaired, such as mind-controlled zooming, and wearable controlled zooming</h5>
                        <h4 className="cart">See full details</h4>
                
                <div className="line text-left"></div>
                    </div>
                        <div className="col-md-1"></div>
        </div>
    </div>
    
    
            
    <div className="container">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-2">
                <img src="images/3.jpg" className="img-responsive"></img>
            </div>
            <div className="col-md-7"><h3 className="Think">Slatecube</h3>
                <h5>Slatecube helps job seekers develop job-relevant skills, gain work experience and land well paying jobs through world-className up-skilling courses and virtual internships.</h5>
                <h4 className="cart">See full details</h4>
                
                <div className="line text-left"></div>
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>
        
            
        
            
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2">
                    <img src="images/4.png" className="img-responsive"></img>
                </div>
                <div className="col-md-7"><h3 className="Think">Sleekjob Academy</h3>
                    <h5>Trains world className developers in Ghana and matches them to employment opportunities.</h5>
                    <h4 className="cart">See full details</h4>
                    
                    <div className="line text-left"></div>
                </div>
                <div className="col-md-1"></div>
            </div>
                
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

export default Startups;