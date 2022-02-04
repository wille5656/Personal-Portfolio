import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import {useState} from 'react'
export default function Portfolio() {

    const [selected, setSelected]= useState("featured")

const list= [

{
    id: "featured",
    title: "Featured"
},
{
    id: "web",
    title: "Web App"
},
{
    id: "mobile",
    title: "Mobile App"
},
{
    id: "design",
    title: "Design"
},
{
    id: "branding",
    title: "Branding"
},
    
]

    return (
        <div className = "portfolio" id ="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList title = {item.title} active ={selected===item.id} setSelected={setSelected} item={item.id}/>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src ="./assets/portfolio.png" alt =""/>
                    <h3>Banking app</h3>
                </div>
                <div className="item">
                    <img src ="./assets/portfolio.png" alt =""/>
                    <h3>Banking app</h3>
                </div>
                <div className="item">
                    <img src ="./assets/portfolio.png" alt =""/>
                    <h3>Banking app</h3>
                </div>
                <div className="item">
                    <img src ="./assets/portfolio.png" alt =""/>
                    <h3>Banking app</h3>
                </div>
            </div>
        </div>
    )
}
