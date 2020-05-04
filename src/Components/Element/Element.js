import React from 'react';
import './Element.css';
import {Github} from '@icons-pack/react-simple-icons'

const Element = ({image, title, text, technologies, github, githubApi, reverse}) => {
    return(
        <section className='element'>
            <div className={reverse ? 'elementDescription reverseDescription' : 'elementDescription'}>
                <h2 className='elementTitle'>{title}</h2>
                <p className='elementText'>{text}</p>
                <div className='technologies'>
                    {
                        technologies.map((technology) =>{
                            return(
                                <span className='elementTechnology'>{technology}</span>
                            );
                        })
                    }
                </div>
                <div className='elementLinks'>
                    {
                        github?
                            <a href={github} target="_blank" className='elementsButton'>View on GitHub &nbsp; <Github color="#414753" size={20}/></a>
                        : null
                    }
                    {
                        githubApi?
                            <a href={githubApi} target="_blank" className='elementsButton'>View on GitHub &nbsp; <Github color="#414753" size={20}/></a>
                        : null
                    }
                </div>
            </div>
            <div className={reverse ? 'image reverseImage' : 'image'}>
                <img src={image}/>
            </div>
        </section>
    );
}

export default Element;