import {Particle2} from "../Component/Particle2.jsx";
import '../Component/AboutPage.css'
import College from '../assets/college.jpeg'

export function AboutUs() {
    return (
        <>
                <Particle2/>
            <div className={'AboutPage'}>
                <section className="about" id="Aboutus">
                    <div className="row">
                        <div className="col50">
                            <h2 className="tittleText"><span>A</span>bout SVCE</h2>
                            <p>
                                Swami Vivekanand College of Engineering (SVCE) aspires to create Center of Excellence for continuous learning by providing state-of-art Technical Education to the students and learners, by enhancing the capabilities to be the Techno-Management Thought Leaders.
                                The Mission of Swami Vivekanand Group of Institutions (SVGI) is to contribute in the overall socio-economic upliftment of the society, by providing innovative thought leaders at all levels in their respective areas, and also by retaining the human values.
                            </p>
                        </div>
                        <div className="col50">
                            <div className="imgbx">
                                <img src={College} alt="college"/>
                            </div>
                        </div>
                    </div>
                </section>
                <div className={'AboutEvent'}>

                </div>
            </div>
        </>
    )
}