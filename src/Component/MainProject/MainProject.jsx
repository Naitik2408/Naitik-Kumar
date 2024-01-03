import React, { useEffect, useState } from 'react'
import './MainProject.css'
import { useParams,Link } from 'react-router-dom'
import service from '../../Appwrite/Database'
import { GoLinkExternal } from "react-icons/go";
import { PiGithubLogoThin } from "react-icons/pi";
import Loder from '../../Loder/Loder';
import { PiArrowCircleRightFill } from "react-icons/pi";

function MainProject() {
  const [load,setLoad] = useState(true)
  const [posts, setPosts] = useState({})
  const { postId } = useParams();
  useEffect(() => { }, []);
  async function getThisPost(){
    await service.getPost(postId).then((post) => {
      try {
        if (post) {
          setPosts(post)
        }
      } catch (error) {
        console.log('this is mainProject error:',error)
      }finally{
        setLoad(false)
      }

    })
  }
  getThisPost()

  return load? <Loder/> : (
    <div className='main-project'>
      <div className="main-project-image">
        <div className="image-title">{posts.Title}</div>
        <img src={posts.ImageLink} alt="" />
      </div>
      <div className="main-porject-details">
        <ul className='links'>
          <li><Link to={posts.GithubUrl}><PiGithubLogoThin /></Link></li>
          <li><Link to={posts.ProjecUrl} className='ab'>Preview<GoLinkExternal className='previewIcon' /></Link></li>
        </ul>
        <div className="project-details-about">
          <div className='features'><PiArrowCircleRightFill className='icons'/>Features</div>
          <ul>
          {posts.About.map((item)=>{
            return <li key={item}>{item}</li>
          })}
          </ul> 
        </div>
        <div className="notification" style={{marginTop:'40px'}}>
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <div className="notititle" style={{color:'rgb(255, 96, 96)'}}>Under Development</div>
              <div className="notibody">This page is under development.Still developing for better UI and more information for this page.But you can get code and preview the page.</div>
            </div>
      </div>
    </div>
  )
}

export default MainProject