import React from 'react'
import {projectsData} from "./data"
import {Footer} from "./Footer"
export const MyProjects = () => {
    return (
        <main>
            <div className="projects">  
                <div className="projects-image">
                    <h1>My projects</h1>
                </div>
                <div className="projects-items">
                    {projectsData.map((item)=>(
                        <div key={item.id} className="projects-items-item">
                            {item.photo}
                            <div className="item-content">
                                {item.tags}
                                {item.title}
                                {item.prograPhoto}
                                {item.btns}
                            </div>    
                        </div>
                    ))}
                </div>    
                <Footer/>
             </div>
        </main>     
    )
}
