import React from 'react'
import {Github} from '@icons-pack/react-simple-icons'
import './Projects.css'
import jokes from '../../Images/jokes2.png'


const Projects = () => {
    return(
        <main className='projects'>
            <div className='elementsWrapper'>
                <div className='pageTitle'>
                   <h1 className='pageTitle'>Projects.</h1>
                </div>
                <section className='element'>
                    <div className='projectDescription'>
                        <h2 className='projectTitle'>Humor enhancer</h2>
                        <p className='projectText'>An app made for a project at university. It allows you to register, browse jokes, add them to your favourites and check other people profiles.</p>
                        <div className='technologies'>
                            <span className='projectTechnology'>Javascript</span>
                            <span className='projectTechnology'>React</span>
                            <span className='projectTechnology'>CSS</span>
                            <span className='projectTechnology'>Docker</span>
                            <span className='projectTechnology'>Node</span>
                            <span className='projectTechnology'>Express.js</span>
                            <span className='projectTechnology'>Knex.js</span>

                        </div>
                        <div className='projectLinks'>
                            <a href='' target="_blank" className='projectsButton'>View on GitHub &nbsp; <Github color="#414753" size={20}/></a>
                            <a href='' target="_blank" className='projectsButton'>View API on GitHub &nbsp; <Github color="#414753" size={20}/></a>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={jokes}/>
                    </div>
                </section>

                <section className='element'>
                    <div className='projectDescription'>
                        <h2 className='projectTitle'>Humor enhancer</h2>
                        <p className='projectText'>An app made for a project at university. It allows you to register, browse jokes, add them to your favourites and check other people profiles.</p>
                        <div className='technologies'>
                            <span className='projectTechnology'>Javascript</span>
                            <span className='projectTechnology'>React</span>
                            <span className='projectTechnology'>CSS</span>
                            <span className='projectTechnology'>Docker</span>
                            <span className='projectTechnology'>Node</span>
                            <span className='projectTechnology'>Express.js</span>
                            <span className='projectTechnology'>Knex.js</span>

                        </div>
                        <div className='projectLinks'>
                            <a href='' target="_blank" className='projectsButton'>View Frontend on GitHub &nbsp; <Github color="#414753" size={24}/></a>
                            <a href='' target="_blank" className='projectsButton'>View Backend on GitHub &nbsp; <Github color="#414753" size={24}/></a>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={jokes}/>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Projects;