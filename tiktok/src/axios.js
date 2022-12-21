import axios from 'axios';

const instance = axios.create({
    //Port 8000???
    baseURL:"http://localhost:9000",
});

export default instance;