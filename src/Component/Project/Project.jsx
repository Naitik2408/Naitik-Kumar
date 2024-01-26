import React, { useEffect, useState } from 'react'
import './Project.css'
import './Programming.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import service from '../../Appwrite/Database';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { ProjectCard, Loder } from '../../index'
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


function Project() {
  const [load, setLoad] = useState(true)
  const [posts, setPosts] = useState([]);
  useEffect(() => { }, []);
  async function getAllProject() {
    await service.allPosts().then((post) => {
      try {
        if (post) {
          setPosts(post.documents)
        }
      } catch (error) {
        console.log('this is project error', error)
      } finally {
        setLoad(false)
      }

    })
  }
  getAllProject()
  const allFrameworks = useSelector(state => state.langBarData.language)
  return load ? <Loder /> : (
    <div className='w-full p-4 h-screen'>
      <div className='project-title'>
        <lord-icon
          src="https://cdn.lordicon.com/gqjpawbc.json"
          trigger="loop"
          delay='2000'
          stroke="regular"
          colors={`primary:${allFrameworks.color},secondary:${allFrameworks.color}`}
          style={{ width: '70px', height: '70px' }}>
        </lord-icon>
        Projects
      </div>
      <div className='all-project-cards flex justify-between items-center'>
        <div className="notification w-[40%] h-[100%]">
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle">About Me</div>
          <div className="notibody">
            Hey there! Naitik Kumar, second-year college student and front-end web developer by day, aspiring full-stack alchemist by night. I'm turning digital dreams into reality, one pixel at a time. Beyond crafting beautiful interfaces with HTML, CSS, and JavaScript, I'm diving deep into the back-end realm. Collaboration fuels my fire, so Git and GitHub are my playgrounds. Check out my portfolio for a glimpse into my brewing creations! Let's connect, discuss tech trends.**</div>
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
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {posts.map((item) => {
            return <SwiperSlide key={item.$id} ><Link to={`/main-project/${item.$id}`}><ProjectCard imgUrl={item.ImageLink} hash={item.HashTags} title={item.Title} /></Link></SwiperSlide>
          })}

          {window.innerWidth > 768 && <div className="swiper-button-prev"></div>}
          {window.innerWidth > 768 && <div className="swiper-button-next"></div>}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  )
}

export default Project
