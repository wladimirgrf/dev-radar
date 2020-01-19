import axios from 'axios'


const api = axios.create({
    baseURL: 'https://3333-ba759df8-60eb-4baa-8eef-738f55487a19.ws-us02.gitpod.io'
});

export default api