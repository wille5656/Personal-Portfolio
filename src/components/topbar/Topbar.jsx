import './topbar.scss'
import { Person, Mail } from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className= {"topbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Will E.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>917-733-4730</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>wille5600@gmail.com</span>
                    </div>
                </div>
                <h1></h1>
                <div className="right">
                   <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                       <span classname = "line1"></span>
                       <span classname = "line2"></span>
                       <span classname = "line3"></span>
                   </div>

                </div>
                <h1></h1>
            </div>
        </div>
    )
}
