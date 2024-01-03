import React,{useState,useEffect} from 'react'
import './AllProject.css'
import {AllProjectCard,Loder} from '../../index'
import { Link } from 'react-router-dom'
import service from '../../Appwrite/Database'

function AllProject() {
    const [load, setLoad] = useState(true)
    const [posts, setPosts] = useState([]);
    useEffect(() => {}, []);
    async function getProjects(){
        try {
            await service.allPosts().then((post)=>{
                if(post){
                    setPosts(post.documents)
                }
            })
        } catch (error) {
            console.log('this is allproject error:',error)
        }finally{
            setLoad(false)
        }
    }
    getProjects()
    return load? <Loder/> : (
        <div className='all-projects'>
            <div className='all-project-list'>
                {posts.map((items)=>{
                    return <Link key={items.Title} to={`/main-project/${items.$id}`}><AllProjectCard title={items.Title} subtitle={items.Subtitle} link={items.ImageLink} features={items.About} hash={items.HashTags} /></Link>
                })}
                
            </div>
        </div>
    )
}

export default AllProject
