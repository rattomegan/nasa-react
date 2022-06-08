import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import WarpSpeed from './WarpSpeed';

const Home = () => {
  useEffect(() => {
    new WarpSpeed('warp-canvas', {"speed":2,"speedAdjFactor":0.03,"density":0.7,"shape":"circle","warpEffect":true,"warpEffectLength":10,"depthFade":true,"starSize":3,"backgroundColor":"hsl(263,45%,7%)","starColor":"#FFFFFF"})
  }, [])

  return (
    <>
      <div className='homeButton'>
        <Link to='/today' className='homeLink'>Explore</Link>
        <p>View Nasa's photo of the day, or search past daily photos.</p>
      </div>
      <canvas id="warp-canvas" style={{position: 'absolute', top: '0', width:'100vw', height:'100vh', zIndex:'-1'}}></canvas>
    </>
  )
}

export default Home;