import React from 'react';
import ButtonNav from '../../Atoms/ButtonNav/ButtonNav';

export default function Liens() {
    return (
      <div className="navigation">
        <ButtonNav/>
        <div className="lien">
            <div className="lien__logo">
     
          <img src= {`${process.env.PUBLIC_URL}/logo322.png`}  alt="logo" />
       
      </div>
      <div className="lien__logo">
       
            <img src= {`${process.env.PUBLIC_URL}/logo112.png`}  alt="logo" />
        
        </div>
         
        </div>
        </div>
    )
}
