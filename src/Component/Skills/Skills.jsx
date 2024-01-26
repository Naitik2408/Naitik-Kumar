import React, { useState } from 'react'
import './Skills.css'
import { LineChart } from '../../index'
import { useDispatch, useSelector } from 'react-redux'
import { setHtml, setCss, setJavascript, setReact, setGit,setGithub , setTailwind } from '../../Store/BarData'
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";


function Skills() {
  const divRef = React.createRef()
  const dispatch = useDispatch()
  const allFrameworks = useSelector(state => state.langBarData.language)
  const [copy, setCopy] = useState('fa-regular fa-copy');
  const handleCopyBtn = () => {
    setCopy('fa-solid fa-check');
    const innertext = divRef.current.innerText;
    navigator.clipboard.writeText(innertext)
    setTimeout(() => {
      setCopy('fa-regular fa-copy')
    }, 4000);
  }
  return (
    <div className='w-full min-h-screen p-4 mb-20'>
      <div className="flex items-center text-4xl mb-5">
        <lord-icon
          src="https://cdn.lordicon.com/abwrkdvl.json"
          trigger="loop"
          delay="2000"
          stroke="regular"
          colors={`primary:${allFrameworks.color},secondary:${allFrameworks.color}`}
          style={{ width: '70px', height: '70px' }}>
        </lord-icon>
        Skills
      </div>
      <div className='w-full flex justify-between'>
        <div className='w-[50%] bg-slate-900 rounded-lg p-4 shadow-lg shadow-black'>
          <LineChart />
          <ul className='flex flex-wrap gap-4 mt-5'>
            {allFrameworks.framwork.map((item) => (
              <li key={allFrameworks.framwork.indexOf(item)} className='kd bg-slate-800 w-fit px-2 py-1 text-sm rounded-md font-thin'>{item}</li>
            ))}
          </ul>
        </div>
        <div className='w-[47%]'>
          <div className="notification pb-20">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <div className="notititle">// Programming Languages <br /> // Technologies..</div>
            <div className="notibody">
              <div className="cards">
                <div className="card html" onClick={() => { dispatch(setHtml()); }}>
                  <p className="tip"><i className="fa-brands fa-html5"></i></p>
                </div>
                <div className="card css" onClick={() => { dispatch(setCss()); }}>
                  <p className="tip"><i className="fa-brands fa-css3-alt"></i></p>
                </div>
                <div className="card jscript" onClick={() => { dispatch(setJavascript()); }}>
                  <p className="tip"><i className="fa-brands fa-js"></i></p>
                </div>
                <div className="card react" onClick={() => { dispatch(setReact()); }}>
                  <p className="tip"><i className="fa-brands fa-react"></i></p>
                </div>
                <div className="card git" onClick={() => { dispatch(setGit()); }}>
                  <p className="tip"><i className="fa-brands fa-git-alt"></i></p>
                </div>
                <div className="card github" onClick={() => { dispatch(setGithub()); }}>
                  <p className="tip"><i className="fa-brands fa-github-alt"></i></p>
                </div>
                <div className="card tailwind group" onClick={() => { dispatch(setTailwind()); }}>
                  <p className="tip"><SiTailwindcss className='text-5xl group-hover:text-blue-400'/></p>
                </div>
                <div className="card nodeJs disab" id='dib'>
                  <p className="tip"><TbBrandCpp className='text-5xl group-hover:text-blue-400'/></p>
                  <p className="tip"><i className="fa-solid fa-circle-exclamation"></i></p>
                </div>
                <div className="card nodeJs disab" id='dib'>
                  <p className="tip"><i className="fa-brands fa-node-js"></i></p>
                  <p className="tip"><i className="fa-solid fa-circle-exclamation"></i></p>
                </div>
                <div className="card nodeJs disab" id='dib'>
                  <p className="tip"><BiLogoMongodb className='text-5xl group-hover:text-blue-400'/></p>
                  <p className="tip"><i className="fa-solid fa-circle-exclamation"></i></p>
                </div>
                <div className="card database disab" id='dib'>
                  <p className="tip"><i className="fa-solid fa-database"></i></p>
                  <p className="tip"><i className="fa-solid fa-circle-exclamation"></i></p>
                </div>
                <div className="card database disab" id='dib'>
                  <p className="tip"><i className="fa-brands fa-java"></i></p>
                  <p className="tip"><i className="fa-solid fa-circle-exclamation"></i></p>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Skills
