import React from 'react';
// import {Link} from 'react';

 export default function ButtonNav (){
    return (
        <div> 
            <nav className="nav">
        <div className="nav__logo ">
          {/* <Link to="/"> */}
            <img src= {`${process.env.PUBLIC_URL}/logo132.jpeg`}  alt="logo" />
          {/* </Link> */}
        </div>
        <h3>PATRICK ZAMBLE-BI</h3>
        <div className="nav__buttons">
          <div className="nav__buttons__test">
            {/* <Link to="/about"> */}
              <h3>ABOUT</h3>
            {/* </Link> */}
          </div>
     
            
          <div className="nav__buttons__test">
            {/* <Link   to="/projects"> */}
              <h3>PROJECTS</h3>
            {/* </Link> */}
          </div>
          <div className="nav__buttons__test">
          {/* <Link   to="/contact"> */}
              <h3>CONTACT</h3>
            {/* </Link> */}
          </div>
        </div>
      </nav>
      
    </div>
    );
    } 
