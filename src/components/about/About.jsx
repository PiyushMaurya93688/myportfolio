import React from 'react'
import "./about.css"


function About() {
    return (
        <div className='a'>
            <div className="a-left">

                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Wikiconference_India_2016_presentations_hall_1%2C_Landhran_CGC.jpg/640px-Wikiconference_India_2016_presentations_hall_1%2C_Landhran_CGC.jpg"
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I am a React Developer, Node.js programmer and BCA and BA graduate from MDU, Rohtak and Dr. B.R. Ambedkar University respectively. I am also a Wikipedian on volunteer basis.
                </p>
                <p className="a-desc">
                    I did my coding classes from Ducat Institute. Some things I learned from self-study. I have built this website by my own understanding of React.
                </p>
                
            </div>
        </div>
    )
}

export default About