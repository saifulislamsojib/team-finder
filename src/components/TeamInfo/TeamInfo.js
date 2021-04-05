import { faClock, faFlag, faMars, faVolleyballBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import femaleImg from '../../images/female.png';
import maleImg from '../../images/male.png';
import './TeamInfo.css';

const TeamInfo = ({team}) => {
    const { intFormedYear, strGender, strTeam, strCountry, strSport} = team;
    const playerImg = strGender.toLowerCase() ==="male" ? maleImg : femaleImg;
    return (
        <div className="team-info mb-4 p-4 text-white">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                    <h1>{strTeam}</h1>
                    <h5><FontAwesomeIcon className="me-2" icon={faClock} /> Founded: {intFormedYear}</h5>
                    <h5><FontAwesomeIcon className="me-2" icon={faFlag} /> Country: {strCountry}</h5>
                    <h5><FontAwesomeIcon className="me-2" icon={faVolleyballBall} /> Sport Type: {strSport}</h5>
                    <h5><FontAwesomeIcon className="me-2" icon={faMars} /> Gender: {strGender}</h5>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={playerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TeamInfo;