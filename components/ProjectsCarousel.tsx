import Image from 'next/image'
import React from 'react'

const ProjectsCarousel = () => {
  return (
    <div>
     <Image src={"/images/foodie-pal.png"} height={150} width={250} alt="foodie-pal" className='object-cover'/> 
    </div>
  )
}

export default ProjectsCarousel
