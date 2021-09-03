import React from 'react'
import Carousel, { slidesToShowPlugin }from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function Projects() {
  return (
    <div className='projects'>
      <div className='left'>
        <h3 className='projtitle'>Projects</h3>
      </div>
      <div className='right'>
        <Carousel plugins={[
          'centered',
          'arrows',
          {
            resolve: slidesToShowPlugin,
            options: {
            numberOfSlides: 1.1,
            },
          },
        ]}>
          <div className="card">
            <h2 className='projnames'><a href="https://babycentral.herokuapp.com/" target="_blank" rel='noreferrer' className='projlinks'>Baby Central</a></h2>
            <img className='projimages' src='/images/BabyCentralsmall.png' alt='babycentral logo'></img>
            <p className='projdesc'>This is a student project written in React and Javascript, where I used Passport for authentication and Knex.js for sql query. It is currently unfinished and is something I slowly work on during my free time. Baby Central is meant to be a database of baby products and services available in New Zealand.</p>
          </div>
          <div className="card">
            <h2 className='projnames'><a href="https://jatin-puri-coder.github.io/Weather/" target="_blank" rel='noreferrer' className='projlinks'>Weather App</a></h2>
            <img className='projimages' src='/images/Weather App.png' alt='weatherapp logo'></img>
            <p className='projdesc'>Thought of doing this just to keep me busy. Simple weather app where the background changes depending on the weather. Created with React and used weatherapi for the weather.</p>
          </div>
          <div className="card">
            <h2 className='projnames'><a href="https://jatin-puri-coder.github.io/Countdown/" target="_blank" rel='noreferrer' className='projlinks'>Countdown</a></h2>
            <img className='projimages' src='/images/Countdown.png' alt='countdown logo'></img>
            <p className='projdesc'>Put in a date and watch the timer countdown. Another project I did to keep me busy. Written in javascript and used three.js for the spinning element in the middle.</p>
          </div>
          <div className="card">
            <h2 className='projnames'><a href="https://jatin-puri-coder.github.io/minesweeper/" target="_blank" rel='noreferrer' className='projlinks'>Minesweeper</a></h2>
            <img className='projimages' src='/images/Minesweeper.png' alt='minesweeper logo'></img>
            <p className='projdesc'>This was one of the challenges given to us early on in our course. I had great fun doing this and was probably the first piece of code I was proud of completing.</p>
          </div>
          <div className="card">
            <h2 className='projnames'><a href="https://jatin-puri-coder.github.io/theneverendingroad/" target="_blank" rel='noreferrer' className='projlinks'>The Neverending Road</a></h2>
            <img className='projimages' src='/images/the neverending road.png' alt='tnr logo'></img>
            <p className='projdesc'>Another one I did early on in the course. We were encouraged to make a ridiculous, random website that accomplishes nothing and I thought of creating a webpage with an infinite scroll.</p>
          </div>
        </Carousel>
        {/* <div className="scrolling-wrapper">
          <div className="card">
            <h2 className='projnames'><a href="https://babycentral.herokuapp.com/" target="_blank" rel='noreferrer' className='projlinks'>Baby Central</a></h2>
            <img className='projimages' src='/images/BabyCentralsmall.png' alt='babycentral logo'></img>
            <p className='projdesc'>This is a student project written in React and Javascript, where I used Passport for authentication and Knex.js for sql query. It is currently unfinished and is something I slowly work on during my free time. Baby Central is meant to be a database of baby products and services available in New Zealand.</p>
          </div>
          <div className="card">
            <h2 className='projnames'><a href="https://jatin-puri-coder.github.io/Weather/" target="_blank" rel='noreferrer' className='projlinks'>Weather App</a></h2>
            <img className='projimages' src='/images/Weather App.png' alt='weatherapp logo'></img>
            <p className='projdesc'>Thought of doing this just to keep me busy. Simple weather app where the background changes depending on the weather. Created with React and used weatherapi for the weather.</p>
          </div>
          <div className="card">
            <h2 className='projnames'><a href="https://jatin-puri-coder.github.io/Countdown/" target="_blank" rel='noreferrer' className='projlinks'>Countdown</a></h2>
            <img className='projimages' src='/images/Countdown.png' alt='countdown logo'></img>
            <p className='projdesc'>Put in a date and watch the timer countdown. Another project I did to keep me busy. Written in javascript and used three.js for the spinning element in the middle.</p>
          </div>
          <div className="card">
            <h2 className='projnames'><a href="https://jatin-puri-coder.github.io/minesweeper/" target="_blank" rel='noreferrer' className='projlinks'>Minesweeper</a></h2>
            <img className='projimages' src='/images/Minesweeper.png' alt='minesweeper logo'></img>
            <p className='projdesc'>This was one of the challenges given to us early on in our course. I had great fun doing this and was probably the first piece of code I was proud of completing.</p>
          </div>
          <div className="card">
            <h2 className='projnames'><a href="https://jatin-puri-coder.github.io/theneverendingroad/" target="_blank" rel='noreferrer' className='projlinks'>The Neverending Road</a></h2>
            <img className='projimages' src='/images/the neverending road.png' alt='tnr logo'></img>
            <p className='projdesc'>Another one I did early on in the course. We were encouraged to make a ridiculous, random website that accomplishes nothing and I thought of creating a webpage with an infinite scroll.</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Projects