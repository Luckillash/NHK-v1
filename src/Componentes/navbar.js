import logo from './nh.png'
import { Link } from 'react-router-dom'
import anime from 'animejs/lib/anime.es.js'
import { useEffect } from 'react'

function Navbar() {
  useEffect(() => {
    anime({ targets: '#links' })
  }, [])

  return (
    <nav className='navbar'>
      <Link to='/'>
        <img src={logo} alt='NHK' className='logo' />
      </Link>
      <div className='link'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <p className='links'>HOME</p>
        </Link>
        <Link to='/nosotros' style={{ textDecoration: 'none' }}>
          <p className='links'>NOSOTROS</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
