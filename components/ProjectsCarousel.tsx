import Image from 'next/image'
import React from 'react'

const ProjectsCarousel = () => {
  return (
    <div>
     <Image src={"/images/foodie-pal.png"} height={180} width={300} alt="foodie-pal" className='object-cover rounded-md border border-sky-600 border-t-2'/> 
    </div>
  )
}

export default ProjectsCarousel
