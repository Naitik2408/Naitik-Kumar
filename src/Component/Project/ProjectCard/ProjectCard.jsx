import React from 'react'
import './ProjectCard.css'



function ProjectCard({imgUrl, hash=[]}) {
  return (
    <div className='projectCard'>
      <div className='image-part'>
        <img src={imgUrl} alt='error'/>
      </div>
      <div className='hash-tag-part'>
        <ul>
          {hash.map((item)=>{
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard
