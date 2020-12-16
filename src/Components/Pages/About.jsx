import React from 'react';

export default function About(){
    return (
        <div className="about">
      <h3>ABOUT ME</h3>
      <div className="about-me">
            <div className="about-me_img">
                <img src= {`${process.env.PUBLIC_URL}/patrick.jpg`}   alt="patrick"/>
            </div>
            <div className="about-me_description">
              <p>En reconversion professionnelle, je suis en fin de formation de développeur web chez Simplon. Dynamique, doté d’une grande capacité d’adaptation, je suis avide d’apprendre et d’échanger, j’aime relever des challenges. Actuellement, je suis à la recherche d’un emploi à Marseille pour mettre à profit mes compétences de développeur web.</p>
            </div>
        </div>
        </div>
    )
    
}


