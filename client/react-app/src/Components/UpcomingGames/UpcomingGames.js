import React, { Component } from 'react';
import { useTable } from 'react-table';
import './UpcomingGames.css'

const data = [
    { name: 'Clippers vs. Nuggets ', date: '2/26/2023', score: '124-134'},
    { name: 'Clippers vs. Kings ', date: '2/24/2023', score: '175-176'},
    { name: 'Clippers vs. Suns', date: '2/16/2023', score: '116-107'},
]

class UpcomingGames extends Component {

    render() {
        return (
            <div className="StandingsTable">
                <table>
                    <tr>
                        <th>Recent Games</th>
                        <th>Date</th>
                        <th>Score</th>
                        

                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.date}</td>
                                <td>{val.score}</td>
                                
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
}
    export default UpcomingGames;