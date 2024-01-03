import React, { useEffect, useState } from 'react'
import './Project.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import service from '../../Appwrite/Database';
import { Navigation, Pagination, EffectCoverflow }from 'swiper/modules';
import {ProjectCard,Loder} from '../../index'
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


function Project() {
  const [load,setLoad] = useState(true)
  const [posts, setPosts] = useState([]);
  useEffect(()=>{},[]);
  async function getAllProject(){
    await service.allPosts().then((post)=>{
      try {
        if(post){
          setPosts(post.documents)
        }
      } catch (error) {
        console.log('this is error')
      }finally{
        setLoad(false)
      }

    })
  }
  getAllProject()

  
  const allFrameworks = useSelector(state => state.langBarData.language)
  return load? <Loder/> : (
    <div className='project'>
      <div className='project-title'><span>#</span>Projects</div>
      <div className='all-project-cards'>
        <div className='project-headline'>
          <div className="javascript"></div>
          <div className="html-css-react">
            <div className="html-css">
              <div className="html"></div>
              <div className="css"></div>
            </div>
            <div className="react"></div>
          </div>
        </div>
      <Swiper
      className='swiper-container'
      spaceBetween={0}
      slidesPerView={(window.innerWidth < 768) ? 1 : 3}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      zoom={true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      coverflowEffect={{
        rotate:0,
        stretch: 0,
        depth: 200,
        modifier: 2.5,
      }}
      pagination={{el: '.swiper-pagination',clickable:true}}
      navigation={ {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable:true
      }}
      modules={[EffectCoverflow,Pagination,Navigation]}
      
      

      
    >
      {posts.map((item)=>{
        return <SwiperSlide key={item.$id} ><Link to={`/main-project/${item.$id}`}><ProjectCard imgUrl={item.ImageLink} hash={item.HashTags}/></Link></SwiperSlide>
      })}

      {window.innerWidth > 768 && <div class="swiper-button-prev"></div>}
      {window.innerWidth > 768 && <div class="swiper-button-next"></div>}
      <div className="swiper-pagination"></div>
    </Swiper>
      </div>
      <div className='view-all-projects'>
        <Link to='/all-projects'><div className='project-button' style={{backgroundColor:allFrameworks.color}}>All Projects</div></Link>
      </div>
    
    
    </div>
  )
}

export default Project
