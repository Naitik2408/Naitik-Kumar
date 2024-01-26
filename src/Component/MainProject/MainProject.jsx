import React, { useEffect, useState } from 'react'
import './MainProject.css'
import { useParams, Link } from 'react-router-dom'
import service from '../../Appwrite/Database'
import { GoLinkExternal } from "react-icons/go";
import { PiGithubLogoThin } from "react-icons/pi";
import Loder from '../../Loder/Loder';
import { PiArrowCircleRightFill } from "react-icons/pi";
import { BsExclamationCircleFill } from "react-icons/bs";
import { PiLink } from "react-icons/pi";

function MainProject() {
  const [load, setLoad] = useState(true)
  const [posts, setPosts] = useState({})
  const { postId } = useParams();
  useEffect(() => { }, []);
  async function getThisPost() {
    await service.getPost(postId).then((post) => {
      try {
        if (post) {
          setPosts(post)
        }
      } catch (error) {
        console.log('this is mainProject error:', error)
      } finally {
        setLoad(false)
      }

    })
  }
  getThisPost()

  return load ? <Loder /> : (
    // <div className='p-4 w-full flex justify-between'>
    //   <div className="w-[50%]">
    //     <div className="text-3xl">{posts.Title}</div>
    //     <img src={posts.ImageLink} alt="" />
    //   </div>
    //   <div className="main-porject-details">
    //     <ul className='links'>
    //       <li><Link to={posts.GithubUrl}><PiGithubLogoThin /></Link></li>
    //       <li><Link to={posts.ProjecUrl} className='ab'>Preview<GoLinkExternal className='previewIcon' /></Link></li>
    //     </ul>
    //     <div className="project-details-about">
    //       <div className='features'><PiArrowCircleRightFill className='icons'/>Features</div>
    //       <ul>
    //       {posts.About.map((item)=>{
    //         return <li key={item}>{item}</li>
    //       })}
    //       </ul> 
    //     </div>
    //     <div className="notification" style={{marginTop:'40px'}}>
    //           <div className="notiglow"></div>
    //           <div className="notiborderglow"></div>
    //           <div className="notititle" style={{color:'rgb(255, 96, 96)'}}>Under Development</div>
    //           <div className="notibody">This page is under development.Still developing for better UI and more information for this page.But you can get code and preview the page.</div>
    //         </div>
    //   </div>
    // </div>

    <div className='w-full min-h-screen p-8'>
      <div className='px-3 py-6 rounded-md flex'>
        <div className='w-[50%]'>
          <div className='dkl text-2xl'>{posts.Title}</div>
          <div className='text-sm text-gray-500 mt-3'>The deployment that is available to your visitors.</div>
        </div>
        <div className='w-[50%] flex justify-end items-center gap-5'>
          <Link to={posts.GithubUrl}><div className='py-2 px-4 text-gray-100 bg-[rgba(0,0,0,0.2)] rounded-md cursor-pointer border-[1px] border-gray-700 hover:bg-black'>Git Repository</div></Link>
          <Link to={posts.ProjecUrl}><div className='py-2 px-4 text-black bg-gray-200 rounded-md cursor-pointer hover:bg-gray-100'>Visit</div></Link>
        </div>
      </div>
      <div className='w-full h-96 rounded-md border-[1px] border-gray-500 mt-3 p-4 flex justify-between gap-4'>
        <Link className='w-[50%]' to={posts.ProjecUrl}>
          <div className='bg-green-400 w-[100%] h-full rounded-md overflow-hidden object-cover object-center cursor-pointer relative'>
            <div className='image-container absolute bottom-0  w-full h-full bg-[rgba(245,245,245,0.5)] opacity-0 hover:opacity-40'></div>
            <img className='w-full h-full' src={posts.MainImage} alt="" />
          </div></Link>
        <div className='w-[50%] h-full rounded-md p-4'>
          <div className='text-sm mb-4 flex justify-between'>
            <div>
              <div className='text-gray-500'>Project Name</div>
              <div className='text-gray-300'>{posts.Title}</div>
            </div>
            <div className='flex items-center rounded-full p-1'>
              <div className="tooltip-container">
                <span className="tooltip">Visit</span>
                <span className="text">
                  <Link to={posts.ProjecUrl}>
                    <div className='p-1 bg-[rgba(0,0,0,0.2)] rounded-full border-[2px] border-gray-500 cursor-pointer'>
                      <PiLink className='rounded-full text-xl' />
                    </div>
                  </Link>
                </span>
              </div>



            </div>

          </div>
          <div className='text-sm mb-4'>
            <div className='text-gray-500'>Developer Name</div>
            <div className='text-gray-300'>Naitik Kumar</div>
          </div>
          <div className='text-sm mb-4'>
            <div className='text-gray-500'>Features</div>
            <ul className='text-gray-300'>
              {posts.About.map((item) => {
                return <li key={item} className='text-sm text-gray-300 mt-1'>{item}</li>
              })}
            </ul>
          </div>
          <div className='text-sm mb-4 flex gap-10'>
            <div>
              <div className='text-gray-500'>Status</div>
              <div className='text-gray-300 flex gap-2 items-center'>
                <div className='w-3 h-3 rounded-full bg-green-400'></div>
                <div>Active</div>
              </div>
            </div>
            <div>
              <div className='text-gray-500 flex items-center gap-1'>Created <BsExclamationCircleFill className='cursor-pointer' /></div>
              <div className='text-gray-300 flex gap-2 items-center'>
                <div className='flex items-center gap-2'><div>28 Feb 2023 by Naitik2408</div> <div className='w-5 h-5 rounded-full overflow-hidden object-cover'><img src="https://plus.unsplash.com/premium_photo-1706151921340-424dcde67e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MainProject