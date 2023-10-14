
import "./HomeEvent.css";
import Technical from '../assets/Technical Event2.mp4'
import NonTechnical from '../assets/NonTechnical Event.mp4'
import Cultural from '../assets/Cultural Event.mp4'
import { useRef,useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import {  motionValue } from "framer-motion";


function useParallax(value, distance) {
    const clampedValue = motionValue(0);

    // Ensure scrollYProgress is clamped between 0 and 1
    useEffect(() => {
        const updateValue = (newValue) => {
            clampedValue.set(Math.max(0, Math.min(1, newValue)));
        };

        value.onChange(updateValue);

        return () => {
            value.clearListeners();
        };
    }, [value]);

    return useTransform(clampedValue, [0, 1], [-distance, distance]);
}


function Image( id ,EventName ) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className={'HomeEvent'}>
            <div ref={ref}>
                <a href={'/Events'}>
                    <video className={'EventImg'}
                           autoPlay loop
                           muted>
                        <source src={id} type="video/mp4"/>
                    </video>
                </a>
            </div>
            <motion.h2 className={'EventName'} style={{ y }}>{EventName}</motion.h2>
        </section>
    );
}
// Image(1)
export default function HomeEvent() {

    return (
        <>
            <div className={'HomeEventBanner'}></div>
            {Image(Technical, 'Technical Event')}
            {Image(NonTechnical, 'NonTechnical Event')}
            {Image(Cultural, 'Cultural Fest')}
        </>
    );
}
