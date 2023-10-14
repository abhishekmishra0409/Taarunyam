import {Banner} from '../Component/Banner.jsx'
import HomeEvent from "../Component/HomeEvent.jsx";
import {useEffect} from "react";

export function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <Banner />
            <HomeEvent/>
        </>
    )
}