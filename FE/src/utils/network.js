import axios from 'axios';

axios.interceptors.response.use(
    response => response.data
);

function network() {
    const baseUrl = BASE_URL;
    const headers = {};

    function setCredentials(token) {
        headers.Authorization = `Bearer ${token}`;
    }

    function* postData(action, body) {
        const url = baseUrl + action;
        const config = { headers }
        return yield axios.post(url, body, config);
    }

    function* getData(action, params) {
        const url = baseUrl + action;
        const config = { headers, params }
        return yield axios.get(url, config);
    }

    function* putData(action, body) {
        const url = baseUrl + action;
        const config = { headers }
        return yield axios.put(url, body, config);
    }

    function* deleteData(action) {
        const url = baseUrl + action;
        const config = { headers  }
        return yield axios.delete(url, config);
    }

    return {
        setCredentials,
        postData,
        getData,
        putData,
        deleteData,
    }
}

const networkService = network();

export default networkService;
