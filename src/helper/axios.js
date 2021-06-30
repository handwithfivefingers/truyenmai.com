import axios from 'axios';

import { APIWPURL } from '../urlConfig';

const instance = axios.create({
    baseURL: APIWPURL,

});

export default instance;