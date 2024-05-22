import React from 'react'
import { Link } from 'react-daisyui'

const NavbarDashboard = () => {
  return (
    <div>
      <header className='bg-sky-900 h-[80px]'>
        <nav className='container mx-auto pt-3 flex   px-3  lg:px-0  justify-between items-center'>
          <div className="links">
            <Link href="#" className=' text-fuchsia-500 font-serif text-2xl px-6 py-2'>  Dashboard </Link>
          </div>
          <div className="logo">
            <img src="../../../images/png/img_login.png" alt="logo" className='w-[50px]' />
          </div>

        </nav>
      </header>
    </div>
  )
}

export default NavbarDashboard