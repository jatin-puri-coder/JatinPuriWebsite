import React from 'react'

function Projects() {
  return (
    <div className='projects'>
      <div className='hsplit projtop'>
        <h3 className='projtitle'>Projects</h3>
      </div>
      <div className='hsplit projbottom'>
        <div className="scrolling-wrapper">
          <div className="card">
            <h2 className='projnames'>Baby Central</h2>
            <img className='projimages' src='/images/BabyCentralsmall.png' alt='babycentral logo'></img>
            <p className='projdesc'>This is a student project written in React and Javascript, where I used Passport for authentication and Knex.js for sql query. It is currently unfinished and is something I slowly work on during my free time. Baby Central is meant to be a database of baby products and services available in New Zealand.</p>
          </div>
          <div className="card">
            <h2 className='projnames'>Weather App</h2>
            <img className='projimages' src='/images/Weather App.png' alt='weatherapp logo'></img>
            <p className='projdesc'>Thought of doing this just to keep me busy. Simple weather app where the background changes depending on the weather. Created with React and used weatherapi for the weather.</p>
          </div>
          <div className="card">
            <h2 className='projnames'>Countdown</h2>
            <img className='projimages' src='/images/Countdown.png' alt='countdown logo'></img>
            <p className='projdesc'>Put in a date and watch the timer countdown. Another project I did to keep me busy. Written in javascript and used three.js for the spinning element in the middle.</p>
          </div>
          <div className="card">
            <h2 className='projnames'>Minesweeper</h2>
            <img className='projimages' src='/images/Minesweeper.png' alt='minesweeper logo'></img>
            <p className='projdesc'>This was one of the challenges given to us early on in our course. I had great fun doing this and was probably the first piece of code I was proud of completing.</p>
          </div>
          <div className="card">
            <h2 className='projnames'>The Neverending Road</h2>
            <img className='projimages' src='/images/the neverending road.png' alt='tnr logo'></img>
            <p className='projdesc'>Another one I did early on in the course. We were encouraged to make a ridiculous, random website that accomplishes nothing and I thought of creating a webpage with an infinite scroll.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects