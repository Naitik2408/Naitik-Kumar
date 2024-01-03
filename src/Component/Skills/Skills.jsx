import React, { useState } from 'react'
import './Skills.css'
import {LineChart} from '../../index'
import { useDispatch, useSelector } from 'react-redux'
import { setHtml, setCss, setJavascript, setReact } from '../../Store/BarData'


function Skills() {
  const divRef=React.createRef()
  const dispatch = useDispatch()
  const allFrameworks = useSelector(state => state.langBarData.language)
  const [copy,setCopy] = useState('fa-regular fa-copy');
  const handleCopyBtn = ()=>{
    setCopy('fa-solid fa-check');
    const innertext = divRef.current.innerText;
    navigator.clipboard.writeText(innertext)
    setTimeout(() => {
      setCopy('fa-regular fa-copy')
    }, 4000);
  }
  return (
    <div className='skills'>
      <div className="skills-title"><span>#</span>Skills</div>
      <div className='chart-and-its-sibling'>
        <div className='chart'>
          <LineChart />
          <ul>
            {allFrameworks.framwork.map((item) => (
              <li key={allFrameworks.framwork.indexOf(item)}>{item}</li>
            ))}
          </ul>
        </div>
        {(window.innerWidth > 768) &&
          <div className='chart-sibling'>
            <div className="notification">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <div className="notititle">Intreastin Fact</div>
              <div className="notibody">In crafting this portfolio, I honed skills in React.js, implementing features like React Hook Form and a data management store. A notable highlight is the integrated React chart on the left side of the page.</div>
            </div>
            <div className="relative rounded-lg bg-slate-900 p-2 mt-4 overflow-auto h-80 w-full terminal"  >
              <div className="relative flex text-center">
                <div className="flex pl-3.5 pt-3"><svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/80">
                  <circle r="12" cy="12" cx="12"></circle>
                </svg><svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/80">
                    <circle r="12" cy="12" cx="12"></circle>
                  </svg><svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/80">
                    <circle r="12" cy="12" cx="12"></circle>
                  </svg></div><span className="absolute inset-x-0 top-2 text-xs text-slate-500">Setup.jsx</span>                 
                  <i className={`${copy}`} style={{position:'absolute',right:0,cursor:'pointer'}} onClick={handleCopyBtn}></i>
              </div>
              <div className="mt-5 space-y-1.5 px-5 pb-10" ref={divRef}>
                <p className="mt-4 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span className="text-pink-400">import React from 'react'</span><br />
                  <span className="text-pink-400">import &#123;Line&#125; from 'react-chartjs-2'</span><br />
                  <span className="text-pink-400">import &#123;Chart as ChartJs&#125; from 'chart.js/auto'</span><br />
                  <span className="text-pink-400">import &#123;useSelector&#125; from 'react-redux'</span><br />
                </p>

                <p className="mt-4 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span className="text-pink-400">function LineChart&#40;&#41; &#123;</span><br />
                </p>
                <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span className="text-pink-400">const allData=</span><span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span className="relative text-blue-400">useSelector&#40;state=&gt;state.langBarData.language&#41;</span></span>
                </p>
                <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span className="text-pink-400">render&#40;&#41;&#123;</span><span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span className="relative text-blue-400"> . . . .</span></span><br /><br />
                  <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span className="relative text-blue-400"> . . . .</span></span><br />
                  <span className="text-pink-400">&#125;</span>
                </p>
                <p className="mt-4 font-mono text-xs font-normal tracking-wide text-violet-400">
                  <span className="text-pink-400">export default LineChart</span><br />
                </p>
              </div>
            </div>


          </div>
        }
      </div>

      <div className="languages">
        <ul>
          <li style={allFrameworks.name == 'HTML(%)' ? { backgroundColor: allFrameworks.color, color: 'black' } : { backgroundColor: 'rgb(14, 14, 14)' }} onClick={() => { dispatch(setHtml()); }}>HTML</li>
          <li style={allFrameworks.name == 'Css(%)' ? { backgroundColor: allFrameworks.color, color: 'black' } : { backgroundColor: 'rgb(14, 14, 14)' }} onClick={() => { dispatch(setCss()); }}>CSS</li>
          <li style={allFrameworks.name == 'Javascript(%)' ? { backgroundColor: allFrameworks.color, color: 'black' } : { backgroundColor: 'rgb(14, 14, 14)' }} onClick={() => { dispatch(setJavascript()); }}>Javascript</li>
          <li style={allFrameworks.name == 'React(%)' ? { backgroundColor: allFrameworks.color, color: 'black' } : { backgroundColor: 'rgb(14, 14, 14)' }} onClick={() => { dispatch(setReact()); }}>React</li>
        </ul>
      </div>

    </div>
  )
}

export default Skills
