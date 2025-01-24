import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <div className="bg-background h-[60px] w-full relative flex  items-center justify-between  text-[#222]">
    <div className="logo rounded-full bg-sky-500 w-8 h-8 ml-10"></div>
    <nav className="text-sm  mr-10" >
        <ul className='flex space-x-3 decoration-none'>
          <li className='hover:text-blue-400'>Home</li>
          <li className='hover:text-blue-400'>About Me</li>
          <li className='hover:text-blue-400'><Link href={"/projects"}>Projects</Link></li>
        </ul>
    </nav>
    <div className='absolute h-[4px] bg-lineargold w-full bottom-0 '/> 
   </div>
  )
}

export default Navbar
