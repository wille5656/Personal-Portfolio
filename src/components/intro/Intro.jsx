import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,
            {
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                strings: ['Developer', 'Designer'],
            })

    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt=" " />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    < div className='about-me-options'>
                        <h2>Hi There, I'm </h2>
                        <h1>Will Edwards</h1>
                        <h3>Front End <span ref={textRef}></span></h3>
                    </div>

                </div>
                <a href="#portfolio">
                    <img src="assets/down1.png" alt="" />
                </a>
            </div>
        </div>
    )
}
