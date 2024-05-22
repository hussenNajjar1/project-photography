import React from 'react'
import Link from 'next/link'
const NavbarDesktop = () => {
  return (
    <div>
      <header className=' h-[80px]'>
        <nav className='container mx-auto pt-3 flex   px-3  lg:px-0  justify-between items-center'>
          <div className="logo">
            <img src="/images/png/Focus-pana.PNG" alt="logo" className='w-[50px]' />
          </div>
          <div className="links">
            <Link href="#hero" className='btn px-6 py-2'> تواصل معنا</Link>
          </div>
        </nav>
      </header>

    </div>
  )
}

export default NavbarDesktop