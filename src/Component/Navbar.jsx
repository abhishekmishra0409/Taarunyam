import './Navbar.css'
import Logo from "../assets/Logo.png"
import Taarunyam from "../assets/Taarunyam.gif"
import {NavLink} from "react-router-dom";
import {useState} from "react";



export function  Navbar() {

        const [isChecked, setIsChecked] = useState(false);

        const handleCheckboxChange = (event) => {
            setIsChecked(event.target.checked);
        };
    if (isChecked) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    return (
        <>
            <header>

                <input type="checkbox" id={'chk1'} checked={isChecked}
                       onChange={handleCheckboxChange} />
                <div className={'logoBox'} >
                <a className="Tittle" href="/"><img src={Logo}/></a>
                <a className="TittleGif" href="/"><img src={Taarunyam} alt="Logo" /></a>
                </div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Events">Events</NavLink></li>
                    {/*<li><NavLink to="/Contactus">Contact Us</NavLink></li>*/}
                    <li><NavLink to="/AboutUs">About Us</NavLink></li>
                </ul>
                <div className="menu">
                    <label htmlFor="chk1">
                        <i id={'menuIcon'} className="fa fa-bars" />
                        <i id={'closeIcon'} className="bi bi-x-lg"></i>
                    </label>
                </div>

            </header>
        </>
    )
}

