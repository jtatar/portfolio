import React from 'react';
import jokes from '../../Images/jokes.png';
import python from '../../Images/python.png';
import ticketing from '../../Images/ticketing.png';
import facerecognition from '../../Images/facerecognition.png';
import game from '../../Images/game.jpg';
import movie from '../../Images/movie.png';
import Element from '../Element/Element';
import ElementsHolder from '../ElementsHolder/ElementsHolder';
import './Projects.css';

class Projects extends React.Component {
  componentDidMount() {
    const { toggleNavBar } = this.props;
    toggleNavBar(false, true, false, 'rgb(71,199,100)');
  }

  render() {
    return (
      <main className="mainContentProjects">
        <ElementsHolder pageTitle="Projects.">
          <Element
            image={movie}
            alt={'Video Player'}
            title="Video Player"
            text="Watch2gether clone, allowing users to watch synchronized videos together from many sources"
            technologies={[
              'Javascript',
              'Typescript',
              'React',
              'Node',
              'Express.js',
              'Server-sent events',
            ]}
            githubProject="https://github.com/jtatar/VideoPlayer"
            reverse={true}
          />
          <Element
            image={ticketing}
            alt={'Ticketing app'}
            title="Ticketing app"
            text="An app made with Udemy course in order to understand microservices workflow. Got knowledge of testing, typescript and kubernetes. App allows user to create a ticket, order it and process payment with credit card"
            technologies={[
              'Javascript',
              'Typescript',
              'React',
              'Node',
              'Express.js',
              'Docker',
              'Kubernetes',
              'Jest',
              'MongoDB',
              'Stripe',
            ]}
            githubProject="https://github.com/jtatar/ticketing"
            reverse={false}
          />
          <Element
            image={jokes}
            alt={'Jokes app'}
            title="Humor enhancer"
            text="An app made for a project at university. It allows you to register, browse jokes, add them to favourite list and check other people profiles."
            technologies={[
              'Javascript',
              'React',
              'CSS',
              'Docker',
              'Node',
              'Redis',
              'Express.js',
              'PostgreSQL',
              'Knex.js',
            ]}
            github="https://github.com/jtatar/polsl-tai"
            githubApi="https://github.com/jtatar/polsl-tai-api"
            reverse={true}
          />

          <Element
            image={python}
            alt={'Panda3D game'}
            title="Cube duel"
            text="A game that allows you to duel with your friends in hotseat. The winner of the game is the one who survives the longest time."
            technologies={['Python', 'Panda3D', 'RenderPipeline']}
            githubProject="https://github.com/jtatar/pythongame"
            reverse={false}
          />

          <Element
            image={facerecognition}
            alt={'Face recognition app'}
            title="Face recognition"
            text="An app made with zero to mastery tutorial, uses Clarifai API to detect faces."
            technologies={[
              'Javascript',
              'React',
              'CSS',
              'Node',
              'Express.js',
              'PostgreSQL',
              'Knex.js',
              'Clarifai',
            ]}
            github="https://github.com/jtatar/smartbrain"
            githubApi="https://github.com/jtatar/smartbrain-api"
            reverse={true}
          />

          <Element
            image={game}
            alt={'15 puzzle'}
            title="15 puzzle"
            text="Adaptation of common old puzzle called 15 puzzle. Player has to move numbers to sort them in right order."
            technologies={['Unity', 'C#', 'Android']}
            githubProject="https://github.com/jtatar/15puzzle"
            reverse={false}
          />
        </ElementsHolder>
      </main>
    );
  }
}

export default Projects;
