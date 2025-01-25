import Image from 'next/image'
import React from 'react'

const ProjectsCarousel = () => {
  return (
    <div className='flex items-center justify-center w-full'>
     <Image src={"/images/foodie-pal.png"} height={180} width={280} alt="foodie-pal" className='object-cover rounded-md border-4 border-sky-500 '/> 
    </div>
  )
}

export default ProjectsCarousel
