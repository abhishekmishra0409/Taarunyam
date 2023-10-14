import './Footer.css'
import Facebook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'
import Youtube from '../assets/Youtube.png'
import Instagram from '../assets/Instagram.png'
import Location from '../assets/Location.png'
import Mail from '../assets/Mail.png'
import Phone from '../assets/Phone.png'

export function Footer() {
    return (
        <>
        <div className={'FooterMain'}>
            <div className={'Footer'}>
                <div className={'aboutEvent'}>
                    <h1>Swami Vivekanand College of Engineering</h1>
                    <div className={'Icons'}>
                    <div className={'Icon'}>
                    <a href="https://www.facebook.com/SwamiVivekanandaGroupofInstitution?ref=stream"  target="_blank" ><img src={Facebook} alt={'Facebook'}/></a>
                    </div>
                    <div className={'Icon'}>
                        <a href="https://twitter.com/svgindore"  target="_blank"><img src={Twitter} alt="twitter"/></a>
                    </div>
                    <div className="Icon">
                        <a href="https://www.youtube.com/channel/UCT_cK6srIOrB8-TqjZxpCXg/about"  target="_blank"><img src={Youtube} alt="youtube"/></a>
                    </div>
                    <div className="Icon">
                        <a href="https://instagram.com/svce_indore__shoutout?igshid=MzRlODBiNWFlZA=="  target="_blank"><img src={Instagram} alt="instagram"/></a>
                    </div>
                    </div>
                </div>
                <div className={'AboutCollege'}>
                    <div className={'address'}>
                        <img src={Location}/>
                        <p>Khandwa Road, Indore, Madhya Pradesh</p>
                    </div>
                    <div className={'address'}>
                        <img src={Mail}/>
                        <p>Email: info@svceindore.ac.in</p>
                    </div>
                    <div className={'address'}>
                        <img src={Phone}/>
                        <p>Phone: 07324-405000</p>
                    </div>
                </div>
                <div className={'AboutMe'}>
                        <p>&copy; 2023 Developed by: Abhishek Mishra</p>
                </div>
            </div>
        </div>
        </>
    )
}