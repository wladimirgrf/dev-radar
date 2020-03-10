import axios from 'axios'


const api = axios.create({
    baseURL: 'https://3333-a42b1b0f-155b-485d-88a0-6fc04109c8e2.ws-us02.gitpod.io'
});

export default api