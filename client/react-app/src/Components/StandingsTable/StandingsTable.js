import React, { Component } from 'react';
import { useTable } from 'react-table';
import './StandingsTable.css'

const data = [
    { name: 'Celtics', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
    { name: 'Bucks', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
    { name: '76ers', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
    { name: 'Cavaliers', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
    { name: 'Nets', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
    { name: 'Knicks', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
    { name: 'Heat', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
    { name: 'Hawks', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
    { name: 'Raptors', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
    { name: 'Wizards', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
    { name: 'Bulls', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
    { name: 'Pacers', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
    { name: 'Magic', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
    { name: 'Hornets', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
    { name: 'Pistons', wins: 44, losses: 17, pct: .721, gb: '-',conf: '27-12',home: '24-7',away: '20-10',l10: '8-2',strk: 'W3'},
]
class StandingsTable extends Component {

    render() {
        return (
            <div className="StandingsTable">
                <table>
                    <tr className="Headers">
                        <th>Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>Pct</th>
                        <th>GB</th>
                        <th>Conf</th>
                        <th>Home</th>
                        <th>Away</th>
                        <th>L10</th>
                        <th>Strk</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr className="Values" key={key}>
                                <td>{val.name}</td>
                                <td>{val.wins}</td>
                                <td>{val.losses}</td>
                                <td>{val.pct}</td>
                                <td>{val.gb}</td>
                                <td>{val.conf}</td>
                                <td>{val.home}</td>
                                <td>{val.away}</td>
                                <td>{val.l10}</td>
                                <td>{val.strk}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
}
    export default StandingsTable;