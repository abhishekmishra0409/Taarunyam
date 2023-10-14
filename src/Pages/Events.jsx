import EventBanner from "../Component/EventBanner.jsx";
import {Particle3} from "../Component/Particle3.jsx";
import {useEffect} from "react";

export function Events() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

return (
        <>
            <Particle3/>
            <EventBanner/>
        </>
    )
}