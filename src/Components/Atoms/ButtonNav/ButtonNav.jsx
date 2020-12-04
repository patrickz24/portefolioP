import React, {Link} from 'react';

 const ButtonNav = ()=> {
    return (
        <div> 
            <nav className="nav">
        <div className="navadmin__logo media_tablet_desktop">
          <Link to="/">
            <img src= {`${process.env.PUBLIC_URL}/logo232.svg`}  alt="logo" />
          </Link>
        </div>
        <div className="navadmin__buttons media_tablet_desktop">
          <div className="navadmin__buttons__test">
            <Link to="/about">
              <h3>ABOUT ME</h3>
            </Link>
          </div>
     
            
          <div className="navadmin__buttons__test">
            <Link   to="/projects">
              <h3>PROJECTS</h3>
            </Link>
          </div>
          <div className="navadmin__buttons__test">
            <Link   to="/contact">
              <h3>CONTACT</h3>
            </Link>
          </div>
        </div>
      </nav></div>
    )
    };  export default ButtonNav();