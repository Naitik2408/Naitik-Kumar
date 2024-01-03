import './App.css'
import {Home, Project,Skills,Contact,Navbar} from './index'
import './Component/Navbar/Navbar.css'

function App() {
  return (
    <>
    <Home id='home' />
    <Project id='project' />
    <Skills id='skills'/>
    <Contact id='contact'/>
    {(window.innerWidth < 768) && <Navbar/>  }
    </>
  )
}

export default App
