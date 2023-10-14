import './EventBanner.css'
import 'reactjs-popup/dist/index.css';
import {PopupCard} from "./PopupCard.jsx";
import PropTypes from 'prop-types';
import Technical from '../assets/Technical.jpg'
import NonTechnical from '../assets/Non technical Games.jpg'
import FunGames from '../assets/Fun Games.jpg'
import OneShot from '../assets/One Shot.jpg'
import MechCivil from '../assets/Mechenical & Civil.jpg'
import Cultural from '../assets/Cultural Fest.jpg'
import {EventData} from '../EventsData.js'
function EventBanner() {
    return (
        <>
            <div>
            <div className={'EventBanner'}>
                <div className={'AllEvent'}>
                <div className={'Event'}>
                    <div className={'Event-content'}>
                    <div className={'EventPr'}>
                        <img src={Technical}/>
                    </div>
                        <div className={'EventNames'}>
                            {EventData?.filter((element) => {
                                return element.category.includes('technical');
                        }).map(element => (
                                <PopupCard Event = {element.name} description = {element.description} description1 = {element.description1} description2 = {element.description2} description3 = {element.description3}
                                           entry = {element.entry} wining = {element.wining} coordinator = {element.coordinator} coordinator1 = {element.coordinator1} coordinator2 = {element.coordinator2} coordinator3 = {element.coordinator3} register = {element.register}/>

                            ))}
                        </div>
                    </div>
                </div>
                    <div className={'Event'}>
                        <div className={'Event-content'}>
                            <div className={'EventPr'}>
                                <img src={MechCivil}/>
                            </div>
                            {/*<h1 className={'EventHeading'}>Cultural Event</h1>*/}
                            <div className={'EventNames'}>
                                {EventData?.filter((element) => {
                                    return element.category.includes('civilMe');
                                }).map(element => (
                                    <PopupCard Event = {element.name} description = {element.description} description1 = {element.description1} description2 = {element.description2} description3 = {element.description3}
                                               entry = {element.entry} wining = {element.wining} coordinator = {element.coordinator} coordinator1 = {element.coordinator1} coordinator2 = {element.coordinator2} coordinator3 = {element.coordinator3} register = {element.register}/>
                                ))}
                            </div>
                        </div>
                    </div>
                <div className={'Event'}>
                    {/*<h1 className={'EventHeading'}>Non-Technical Event</h1>*/}
                    <div className={'Event-content'}>
                        <div className={'EventPr'}>
                            <img src={NonTechnical}/>
                        </div>
                        <div className={'EventNames'}>
                            {EventData?.filter((element) => {
                                return element.category.includes('NonTech');
                            }).map(element => (
                                <PopupCard Event = {element.name} description = {element.description} description1 = {element.description1} description2 = {element.description2} description3 = {element.description3}
                                           entry = {element.entry} wining = {element.wining} coordinator = {element.coordinator} coordinator1 = {element.coordinator1} coordinator2 = {element.coordinator2} coordinator3 = {element.coordinator3} register = {element.register}/>

                            ))}
                        </div>
                    </div>
                </div>
                    <div className={'Event'}>
                        {/*<h1 className={'EventHeading'}>Non-Technical Event</h1>*/}
                        <div className={'Event-content'}>
                            <div className={'EventPr'}>
                                <img src={OneShot}/>
                            </div>
                            <div className={'EventNames'}>
                                {EventData?.filter((element) => {
                                    return element.category.includes('OneShot');
                                }).map(element => (
                                    <PopupCard Event = {element.name} description = {element.description} description1 = {element.description1} description2 = {element.description2} description3 = {element.description3}
                                               entry = {element.entry} wining = {element.wining} coordinator = {element.coordinator} coordinator1 = {element.coordinator1} coordinator2 = {element.coordinator2} coordinator3 = {element.coordinator3} register = {element.register}/>

                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={'Event'}>
                        {/*<h1 className={'EventHeading'}>Non-Technical Event</h1>*/}
                        <div className={'Event-content'}>
                            <div className={'EventPr'}>
                                <img src={FunGames}/>
                            </div>
                            <div className={'EventNames'}>
                                {EventData?.filter((element) => {
                                    return element.category.includes('FunGame');
                                }).map(element => (
                                    <PopupCard Event = {element.name} description = {element.description} description1 = {element.description1} description2 = {element.description2} description3 = {element.description3}
                                               entry = {element.entry} wining = {element.wining} coordinator = {element.coordinator} coordinator1 = {element.coordinator1} coordinator2 = {element.coordinator2} coordinator3 = {element.coordinator3} register = {element.register}/>

                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={'Event'}>
                        {/*<h1 className={'EventHeading'}>Non-Technical Event</h1>*/}
                        <div className={'Event-content'}>
                            <div className={'EventPr'}>
                                <img src={Cultural}/>
                            </div>
                            <div className={'EventNames'}>
                                {EventData?.filter((element) => {
                                    return element.category.includes('Cultural');
                                }).map(element => (
                                    <PopupCard Event = {element.name} description = {element.description} description1 = {element.description1} description2 = {element.description2} description3 = {element.description3}
                                               entry = {element.entry} wining = {element.wining} coordinator = {element.coordinator} coordinator1 = {element.coordinator1} coordinator2 = {element.coordinator2} coordinator3 = {element.coordinator3} register = {element.register}/>

                                ))}
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            </div>
        </>
    );
}
EventBanner.protoType = {
    Event : PropTypes.string
}
export default EventBanner;