import React from 'react'
import user from '../style/img/simas11.jpg'
import {Footer} from './Footer'
import { FaCircle} from 'react-icons/fa';
import {experienceData,personalData,educationData,Emoji} from './data'
export const AboutMe = () => {
    return (
        <main> 
            <div className="about_me">
                <div className="about_me-image">
                    <h1>About Me</h1>                  
                </div>
                <img src={user} alt=""/>
                <div className="about_me-list">
                    <div className="details">
                        <h2>BIO</h2>
                        <hr className="experience-line"/>
                        <p className="bio"> My name is Simonas Paulius, I was professional football player for last 14 years and
                         now i am changing my career and my goal is to become professional <span className="word"> web developer</span>. I 
                         imagine my future as Backend developer, because I like to write code and solve tasks, not to make styling, 
                         as you can see from my projects and CV<Emoji label="grinning face with big eyes" symbol="😃"/> . At this moment i am 
                         studying Full Stack Developer course in Kaunas Infomation Technology School. </p>
                         <Footer/>
                    </div>
                    <div className="exp-educ">
                        <div className="experience">
                            <h2>Experience</h2>
                            <hr className="experience-line"/>
                            <div className="experience-info">
                                {experienceData.map((item)=>(
                                        <div key={item.id} className="team">
                                            <FaCircle/>
                                            {item.year}
                                            {item.employer}
                                            {item.position}
                                        </div>
                                    
                                ))}
                            </div>
                        </div>
                        <div className="experience">
                            <h2>Education</h2>
                            <hr className="experience-line"/>
                            <div className="experience-info">
                                {educationData.map((item)=>(
                                        <div key={item.id} className="team">
                                            <FaCircle/>
                                            {item.year}
                                            {item.employer}
                                            {item.position}
                                        </div>
                                    
                                ))}
                            </div>
                        </div>
                    </div>
                    {<div className="personal_container">
                        {personalData.map((item,index)=>(
                            <div key={index} className="personal_container-info">
                                {item.personal&&item.personal}
                                {item.skills&&item.skills}
                                {item.contacts&&item.contacts}
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
        </main>
    )
}
