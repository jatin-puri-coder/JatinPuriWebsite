import React from 'react'

function Music() {
  return (
    <div className='music'>
      <div>
        <h3 className='left'>Music</h3>
      </div>
      <div className='right'>
        <div>
          <img className='pippinlogo' src='/images/Pippinlogo.png' alt='pippin logo'></img>
        </div>
        <div>
          <h2>Listen on Spotify</h2>
          <iframe className='musicplayer' title='Pippin on Spotify' src="https://open.spotify.com/embed/artist/258p0UNcFL1t1ZhHNfr0Cb" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div>
          <h2>Remixes on Soundcloud</h2>
          <iframe className='musicplayer' title='Pippin on Soundcloud' width="500" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/207978428&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
        <div>
          <h2>A nice relaxing spotify playlist to listen to when coding</h2>
        <iframe className='musicplayer' title='spotify playlist' src="https://open.spotify.com/embed/playlist/7flFQLkUgt5LOacTo4Sdfh" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Music
