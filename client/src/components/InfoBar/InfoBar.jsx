import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => {
  return (
    <div>
      <div className="infoBar">
        <div className="leftInnerContainer">
          <img src={onlineIcon} alt="onlineIcon" className="onlineIcon" />
          <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
          {/* When clicked on closeIcon, it will bring us back to the Join Component since href = "/" */}
          <a href="/"><img src={closeIcon} alt="closeIcon" /></a>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
