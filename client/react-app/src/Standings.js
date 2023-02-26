const axios = require("axios");
function Standings() {

    const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/standings',
        params: {league: 'standard', season: '2021'},
        headers: {
            'X-RapidAPI-Key': '1f69a78a4dmsh53b93653f0a820cp1db6c3jsn72f573ed92e0',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        return (
            response.data
        );
        //console.log(response.data);
    }).catch(function (error) {
        const e = 'errors been made'
        return (
            e
        )
        //console.error(error);
    });
}

export default Standings;
