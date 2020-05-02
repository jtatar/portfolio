import React from 'react'
import {Github} from '@icons-pack/react-simple-icons'
import './Projects.css'
import jokes from '../../Images/jokes.png'
import python from '../../Images/python.png'
import facerecognition from '../../Images/facerecognition.png'
import game from '../../Images/game.jpg'


class Projects extends React.Component {

    componentDidMount(){
        const {toggleNavBar} = this.props;
        toggleNavBar(false,true,false,'rgb(71,199,100)')
    }

    render(){
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
                                <span className='projectTechnology'>Redis</span>
                                <span className='projectTechnology'>Express.js</span>
                                <span className='projectTechnology'>PostgreSQL</span>
                                <span className='projectTechnology'>Knex.js</span>
                            </div>
                            <div className='projectLinks'>
                                <a href='https://github.com/jtatar/polsl-tai' target="_blank" className='projectsButton'>View on GitHub &nbsp; <Github color="#414753" size={20}/></a>
                                <a href='https://github.com/jtatar/polsl-tai-api' target="_blank" className='projectsButton'>View API on GitHub &nbsp; <Github color="#414753" size={20}/></a>
                            </div>
                        </div>
                        <div className='image'>
                            <img src={jokes}/>
                        </div>
                    </section>
    
                    <section className='element'>
                        <div className='projectDescription' style={{order:'2'}}>
                            <h2 className='projectTitle'>Cube duel</h2>
                            <p className='projectText'>A game that allows you to duel with your friends in hotseat. The winner of the game is the one who survives the longest time.</p>
                            <div className='technologies'>
                                <span className='projectTechnology'>Python</span>
                                <span className='projectTechnology'>Panda3D</span>
                                <span className='projectTechnology'>RenderPipeline</span>
                            </div>
                            <div className='projectLinks'>
                                <a href='https://github.com/jtatar/pythongame' target="_blank" className='projectsButton'>View on GitHub &nbsp; <Github color="#414753" size={20}/></a>
                            </div>
                        </div>
                        <div className='image' style={{order:'1'}}>
                            <img src={python}/>
                        </div>
                    </section>
    
                    <section className='element'>
                        <div className='projectDescription'>
                            <h2 className='projectTitle'>Face recognition</h2>
                            <p className='projectText'>An app made with zero to mastery tutorial, uses Clarifai API to detect faces.</p>
                            <div className='technologies'>
                                <span className='projectTechnology'>Javascript</span>
                                <span className='projectTechnology'>React</span>
                                <span className='projectTechnology'>CSS</span>
                                <span className='projectTechnology'>Node</span>
                                <span className='projectTechnology'>Express.js</span>
                                <span className='projectTechnology'>PostgreSQL</span>
                                <span className='projectTechnology'>Knex.js</span>
                                <span className='projectTechnology'>Clarifai</span>
                            </div>
                            <div className='projectLinks'>
                                <a href='https://github.com/jtatar/smartbrain' target="_blank" className='projectsButton'>View on GitHub &nbsp; <Github color="#414753" size={20}/></a>
                                <a href='https://github.com/jtatar/smartbrain-api' target="_blank" className='projectsButton'>View API on GitHub &nbsp; <Github color="#414753" size={20}/></a>
                            </div>
                        </div>
                        <div className='image'>
                            <img src={facerecognition}/>
                        </div>
                    </section>
    
                    <section className='element'>
                        <div className='projectDescription' style={{order:'2'}}>
                            <h2 className='projectTitle'>15 puzzle</h2>
                            <p className='projectText'>Adaptation of common old puzzle called 15 puzzle. Player have to move number to sort them in right order.</p>
                            <div className='technologies'>
                                <span className='projectTechnology'>Unity</span>
                                <span className='projectTechnology'>C#</span>
                                <span className='projectTechnology'>Android</span>
                            </div>
                            <div className='projectLinks'>
                                <a href='https://github.com/jtatar/15puzzle' target="_blank" className='projectsButton'>View on GitHub &nbsp; <Github color="#414753" size={20}/></a>
                            </div>
                        </div>
                        <div className='image' style={{order:'1'}}>
                            <img src={game}/>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default Projects;