import axios from 'axios'

const KEY = 'AIzaSyBCId6X8ufeJX29r33Hqh5-kEve0alyZEk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})