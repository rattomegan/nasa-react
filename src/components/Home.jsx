import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import WarpSpeed from './WarpSpeed.js';

const Home = () => {
  useEffect(() => {
    // Link to editor for speed and size variation: http://fdossena.com/warpspeed/editor.html;
    new WarpSpeed('warp-canvas', {"speed":1,"speedAdjFactor":0.6,"density":1.8,"shape":"circle","warpEffect":true,"warpEffectLength":8,"depthFade":true,"starSize":4,"backgroundColor":"#60bef8","starColor":"#fff"})
  }, [])

  return (
    <>
      <div className='home-container' >
        
        <p>
          <span className='home-text'>Explore<br /> Nasa<br/> Photos 
          </span>
          <Link to='/today' className='home-link'>&rarr;</Link>
        </p>

      </div>

      <canvas id="warp-canvas" style={{position: 'absolute', top: '0', width:'100vw', height:'100vh', zIndex:'-1'}}></canvas>
    </>
  )
}

export default Home;