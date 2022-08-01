import axios from 'axios'

const KEY = 'AIzaSyChtRGiLmt61bGOoC5etgIMSAdymLBrxF8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxRequest: 5,
        key: KEY,
    }
});