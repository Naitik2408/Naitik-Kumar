import React from 'react'
import './ProjectCard.css'



function ProjectCard({ imgUrl, hash = [], title = 'Title' }) {
  return (
    <div className='w-80 bg-gray-900 p-4 rounded-lg shadow-lg shadow-black'>
      <div className='w-full rounded-lg overflow-hidden'>
        <img src={imgUrl} alt='error' />
      </div>
      <div className='mt-3 font-normal flex justify-between items-center'>
        <div>{title}</div>
        <div className='flex gap-2'>
          <div className='bg-gray-300 text-black px-3 py-[2px] rounded-md cursor-pointer hover:bg-gray-100'>visit</div>
          <div className='bg-gray-300 text-black px-3 py-[2px] rounded-md cursor-pointer hover:bg-gray-100'>Details</div>
        </div>

      </div>
      <div className='flex justify-between items-center mt-3'>
        <ul className='w-[100%] flex flex-wrap gap-3'>
          {hash.map((item) => {
            return <li key={item} className='kd bg-slate-800 w-fit px-2 py-1 text-sm rounded-md font-thin'>{item}</li>
          })}
        </ul>

      </div>
    </div>
  )
}

export default ProjectCard
