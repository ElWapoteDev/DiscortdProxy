
const axios = require('axios');

const HttpService = {
    GetAsync(url, headers) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                headers: headers
            })
            .then((response) => {
                resolve(response.data)
            })
            .catch((reason) => {
                reject(reason)
            })
        })
    },
    PostAsync(url, body, headers) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                headers: headers,
                data: body,
            })
            .then((response) => {
                resolve(response.data)
            })
            .catch((reason) => {
                reject(reason)
            })
        })
    }
}

module.exports = HttpService