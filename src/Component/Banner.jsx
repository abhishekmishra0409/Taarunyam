import VideoBg from "../assets/VideoBg.mp4";
import '../App.css'
import gsap from "gsap";
import {useEffect, useRef} from "react";
import {Particle} from "./Particle.jsx";
import TypeWriterEffect from 'react-typewriter-effect';

export function Banner() {
    const home = gsap.timeline();
    const homeH1 = useRef(null);
    const homeBg = useRef(null);
    useEffect(() => {
        home.from(homeH1.current, {
            duration: .6,
            skewX: 10,
            x: -100,
            opacity: 0
        },"-=3")
        home.from(homeBg.current, {
            duration: .3,
            y: -200,
            skewY:20,
            opacity: 0
        },"-=4")
    })
    return (
        <>
            <div>
                <Particle/>
                <div className="main">
                    <video className="videoTag" ref={homeBg}
                           autoPlay loop
                           muted>
                        <source src={VideoBg} type="video/mp4"/>
                    </video>
                    <div className="banner" ref={homeH1} >
                        <h1 className="TextReveal">Taarunyam</h1>
                        <h2 className="TextReveal"><TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Red Hat Display',
                                fontWeight: 500,
                                fontSize: '1.3em',
                            }}
                            startDelay={0}
                            cursorColor="black"
                            text="The Technical Fest"
                            typeSpeed={100}

                        /></h2>
                        <p className="TextReveal">
                            {/*We Celebrate Technology is more than just an annual tech conference.*/}
                            {/*We gather the people and organisations that are redefining*/}
                            {/*technology. And oh yeah, have fun – it’s a must! Technology is the*/}
                            {/*closest thing to magic that exists in the world So come and join us*/}
                            {/*...!!*/}
                            <TypeWriterEffect
                                textStyle={{
                                    fontFamily: 'Red Hat Display',
                                    textAlign:'center',
                                    fontSize: '1.1em',
                                }}
                                startDelay={0}
                                cursorColor="black"
                                text="We Celebrate Technology is more than just an annual tech conference.
                            We gather the people and organisations that are redefining
                            technology. And oh yeah, have fun – it’s a must! Technology is the
                            closest thing to magic that exists in the world So come and join us
                            ...!!"
                                typeSpeed={30}

                            />
                        </p>
                        {/*<button className="EventBtn">*/}
                        {/*    <a href={'/Events'}>Events</a>*/}
                        {/*</button>*/}
                        <div className="EventBtn">
                            <div className="Butn"><a href="/Events" >Events</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}