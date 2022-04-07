import React, { useState, useEffect } from "react";
import "./slider.scss"
import data from "../../data"

export default function Slide() {

    const [topic] = useState(data);
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const lastIndex = topic.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }

    }, [index, topic])

    // useEffect(() => {
    //     let slider = setInterval(() => {
    //         setIndex(index + 1);
    //     }, 5000)
    //     return () => {
    //         clearInterval(slider)
    //     }
    // }, [index])

    return (
        <section className ='section'>
            <div className="title">
                <h2> Experienced In The Following Technologies:</h2>
            </div>
            <div className="section-center">
                {topic.map((item, indexTopic)=> {
                    const {id, image, name, quote} = item;
                    let position = "nextSlide";
                    if(indexTopic === index ){
                        position="activeSlide";
                    }
                    if(indexTopic === index-1 || (index === 0 && indexTopic === topic.length-1)){
                            position= "lastSlide";
                    }
                    return(
                        <article className={position} key={id} >
                                <img src ={image} className='person-img'/>
                                <h4> {name} </h4>
                                <p className="text">{quote}</p>
                        </article>
                    );
                })}

<button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
            </div>
        </section>

    )
}
