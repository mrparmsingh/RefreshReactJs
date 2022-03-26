import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID u_EqZVVFfI50Z_yDHw7nFtKGITIv-X9zwi9RG12SalY'
    }
});