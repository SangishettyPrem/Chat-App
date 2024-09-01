import React from 'react'
import "./InfoBar.css"
import onlineIcon from '../../Icons/onlineIcon.png'
import closeIcon from '../../Icons/closeIcon.png'
const InfoBar = ({ room }) => {
    return (
        <div className='infoBar'>
            <div className="leftInnerContainer">
                <img src={onlineIcon} alt="Online Icon" className="onlineIcon" />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="Close Icon" /></a>
            </div>
        </div>
    )
}

export default InfoBar