import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
        fetch(url)
           .then(res => res.json())
           .then(data => setTeams(data.teams))
           .catch(err => console.log(err));
    }, [])
    return (
        <>
            <Header />
            <main className="bg-primary">
                <div className="container pt-5">
                    <div className="row">
                        {
                            teams.length ?
                            teams.map(team => <Team team={team} key={team.idTeam} />)
                                : <Spinner />
                        }
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;