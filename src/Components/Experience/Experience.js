import React from 'react'
import './Experience.css'
import itsilesia from '../../Images/itsilesia.png'
import bmz from '../../Images/bmz.png'


class Experience extends React.Component {

    componentDidMount(){
        const {toggleNavBar} = this.props;
        toggleNavBar(false,false,true,'rgb(255,210,78)')
    }

    render(){
        return(
            <main className='projects'>
                <div className='elementsWrapper'>
                    <div className='pageTitle'>
                       <h1 className='pageTitle'>Experience.</h1>
                    </div>
                    <section className='element'>
                        <div className='projectDescription'>
                            <h2 className='projectTitle'>IT Silesia</h2>
                            <p className='projectText'>I have been a trainee for 2 months. I started with developing an arkanoid game and later in four-person team I was developing an app in Unity for a monitors with touchscreens.</p>
                            <div className='technologies'>
                                <span className='projectTechnology'>Unity</span>
                                <span className='projectTechnology'>C#</span>
                                <span className='projectTechnology'>Git</span>
                            </div>
                        </div>
                        <div className='image'>
                            <img src={itsilesia}/>
                        </div>
                    </section>
    
                    <section className='element'>
                        <div className='projectDescription' style={{order:'2'}}>
                            <h2 className='projectTitle'>BMZ Poland</h2>
                            <p className='projectText'>I worked there in an IT team for 8 months, helped moving to the new headquaters, worked in internal helpdesk, dealt with daily occurring problems and configured new computers for new employees.</p>
                            <div className='technologies'>
                                <span className='projectTechnology'>IT Helpdesk</span>
                            </div>
                        </div>
                        <div className='image bmz' style={{order:'1'}}>
                            <img src={bmz}/>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default Experience;