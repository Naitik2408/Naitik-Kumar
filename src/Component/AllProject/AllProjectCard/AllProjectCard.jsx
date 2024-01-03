import React from 'react'
import './AllProjectCard.css'

function AllProjectCard({title,link,features=[],hash=[]}) {
  return (
    <div className='all-project-card'>
      <div className='all-project-card-image'>
        <img src={link} alt="error" />
      </div>
      <div className='all-project-card-text'>
        <div className="all-project-card-title">{title}</div>
        <div className="all-project-card-subtitle">
          <ul>
            {features.map((item)=>{
              return <li key={item}>{item}</li>
            })}
          </ul>
        </div>
        <ul className='hashTags'>
          {hash.map((item)=>{
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default AllProjectCard
