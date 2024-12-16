import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {   
        key: '5156c7f5885a400ea1d4068e9b8c03a3',
    },
});