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
          </div>
          <div className="card">
            <h2 className='projnames'>Weather App</h2>
            <img className='projimages' src='/images/Weather App.png' alt='weatherapp logo'></img>
          </div>
          <div className="card">
            <h2 className='projnames'>Countdown</h2>
            <img className='projimagesbanner' src='/images/Countdown.png' alt='countdown logo'></img>
          </div>
          <div className="card">
            <h2 className='projnames'>Minesweeper</h2>
            <img className='projimagessq' src='/images/Minesweeper.png' alt='minesweeper logo'></img>
          </div>
          <div className="card">
            <h2 className='projnames'>The Neverending Road</h2>
            <img className='projimagesbanner' src='/images/the neverending road.png' alt='tnr logo'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects