import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <div className="bg-background h-[60px] w-full relative">
    <nav className="text-sm">
        <ul className='decoration-none'>
          <li>Home</li>
          <li>About Me</li>
          <li><Link href={"/projects"}>Projects</Link></li>
        </ul>
    </nav>
    <div className='absolute h-[4px] bg-lineargold w-full bottom-0'/> 
   </div>
  )
}

export default Navbar
