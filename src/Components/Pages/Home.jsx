import React from 'react'

export default function Home() {
    return (
        <div className="home">
            <div className="home-img">
                <img src= {`${process.env.PUBLIC_URL}/patrick.jpg`}   alt="patrick"/>
            </div>
            <div className="home-description">
                <h1>DEVELOPPEUR WEB</h1>
                <h2>Full-stack</h2>
            </div>
        </div>
    )
}


