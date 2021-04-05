import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';

const Team = ({team}) => {
    const {idTeam, strTeam, strTeamBadge, strSport} = team;

    const history = useHistory();
    const handleTeamDetail = teamIid => {
        const url = `/team/${teamIid}`;
        history.push(url);
    }
    return (
        <div className="col-lg-4 col-md-6">
           <div className="bg-white p-4 mb-4 rounded text-center shadow-lg">
                <img className="img-fluid w-50" src={strTeamBadge} alt=""/>
                <h3 className="mt-2">{strTeam}</h3>
                <h5>Sports Type: {strSport}</h5>
                <button onClick={() => handleTeamDetail(idTeam)} className="btn btn-primary mt-2">Details <FontAwesomeIcon className="ms-2" icon={faArrowRight} /></button>
           </div>
        </div>
    );
};

export default Team;