import axios from 'axios';

import { APIURL } from '../urlConfig';

const instance = axios.create({
    baseURL: APIURL,

});

export default instance;