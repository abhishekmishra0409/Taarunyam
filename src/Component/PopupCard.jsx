import {useState} from "react";

export function PopupCard(props) {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <>
            <a onClick={toggleModal} className="event-btn-modal">
                <p> {props.Event}</p>
            </a>

            {modal && (
                <div className="Modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>{props.Event}</h2>
                        <div className={'EventData'}>
                            <h5 className={'marginTitle'} >Description :-</h5>
                            <ul>
                                <li>{props.description}</li>
                                <li>{props.description1}</li>
                                <li>{props.description2}</li>
                                <li>{props.description3}</li>
                            </ul>
                            <h5 className={'EventDataTitle'}>Entry :- {props.entry}/-</h5>
                            <h5 className={'EventDataTitle'}>Prize :- {props.wining} (with Certificate) </h5>
                            <div className={'EventDataTitle'}>If anyone want to Register their name, Connect to the Coordinator</div>

                            <h5 className={'marginTitle'} >Coordinators :-</h5>
                            <ul>
                                <li>{props.coordinator}</li>
                                <li>{props.coordinator1}</li>
                                {/*<li>{props.coordinator2}</li>*/}
                                {/*<li>{props.coordinator3}</li>*/}
                            </ul>
                            <div className="RegisterBtn">
                                <div className="RegisButn"><a href={props.register} >Register Here</a></div>
                            </div>
                        </div>
                        <button className="close-modal" onClick={toggleModal}>
                            <i id={'closeIcon'} className="bi bi-x-lg"></i>
                        </button>
                    </div>
                </div>
            )}

        </>
    );
}