import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Slider from './components/slider/Slider'
import './app.scss'
import {useState} from "react"
import Menu from './components/menu/Menu'
import AboutMe from './components/aboutMe/AboutMe'

export default function App() {

    const [menuOpen, setMenuOpen]= useState(false)
    return (
        <div className = "app">
          <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>  
          <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
          <div className="sections">
              <Intro/>
              <AboutMe/>
              <Portfolio/>
              <Slider/>
              <Contact/>

          </div>
        </div>
    )
}
