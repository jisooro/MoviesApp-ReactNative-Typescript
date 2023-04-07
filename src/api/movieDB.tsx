import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '88175dfcf38b16b0ceed71bcbd7963ba',
        language: 'en-US'
    },
});

export default movieDB;