import axios from 'axios';
const KEY = 'AIzaSyC4j0gl0CnutspQRWQcCpt_XrH6_4iYOEw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})