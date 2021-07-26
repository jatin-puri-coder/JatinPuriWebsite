import React from 'react'

function About() {
  return (
    <div className='about'>
      <div className='vsplit left'>
        <h3>About</h3>
      </div>
      <div className='vsplit right'>
        <div className="hexagon">
          <img src='/images/mypic.png' alt='' className='mypic'></img>
        </div>
        <div className='intro'>
          <p className='topline'>I'm Jatin, a web developer and musician living in New Zealand!</p>
          <p>I am a creative individual with a passion for music and technology and have recently entered the world of web development. I enjoy problem-solving and have a keen eye for aesthetic designs. I work full-stack but I do lean more towards front-end development.</p>
          <p>If you are interested in collaborating on creating a website or software, please feel free to contact me.</p>
          <p className='bottomline'>I am available for freelance projects, contract work or full-time employment</p>
        </div>
      </div>
    </div>
  )
}

export default About
