export default class ApiService {
    static request = async (endpoint, method = 'GET', params = {}) => {
        const url = API_URL + '/' + endpoint;
        const headers = {'Content-Type': 'application/json'};
        let result;
        if (method === 'GET') {
            result = fetch(url, {method: 'GET', headers: headers});
        } else {
            result = fetch(url, {method, headers, body: JSON.stringify(params)});
        }
        return result.then((response) => {
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.status.toString());
            }
            return response.json();
        });
    }
}