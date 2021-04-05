import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import Spinner from '../Spinner/Spinner';
import TeamInfo from '../TeamInfo/TeamInfo';

const TeamDetail = () => {

    const {teamIid} = useParams();
    
    const [team, setTeam] = useState({});

    const [error, setError] = useState(false);
    
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamIid}`;
        fetch(url)
           .then(res => res.json())
           .then(data => setTeam(data.teams[0]))
           .catch(err => setError(true));
    }, [teamIid]);

    const {idTeam ,strTeamBadge, strFacebook, strTwitter, strYoutube, strDescriptionDE, strDescriptionEN} = team;
    return (
        <>
            <Header logo={strTeamBadge} />
            <section className="bg-primary pt-5 pb-2">
                {idTeam ? 
                <div className="container mb-2">
                    <TeamInfo team={team} />
                    <p className="text-white">{strDescriptionDE}</p>
                    <p className="text-white">{strDescriptionEN}</p>
                    <div className="text-center fs-2">
                        <a target="_blank" rel="noreferrer" href={`https://${strTwitter}`} className="me-4 text-white"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a target="_blank" rel="noreferrer" href={`https://${strFacebook}`} className="me-4 text-white"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a target="_blank" rel="noreferrer" href={`https://${strYoutube}`} className="text-white"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </div>
                    : !error && <Spinner />
                }
            </section>
            { error && <NotFound />}
        </>
    );
};

export default TeamDetail;