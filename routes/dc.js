const express = require('express');
const HttpService = require('../utils/HttpService')

const router = express.Router();

router.get('/http', (req, res) => {
    const urlQury = req.query.url;
    let queryHeaders = req.headers;
    delete queryHeaders['host']
    delete queryHeaders['roblox-id']
    

    HttpService.GetAsync(urlQury, queryHeaders).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.send({'error': err})
    })


    console.log(urlQury, queryHeaders)
});

router.post('/http', (req, res) => {
    const urlQury = req.query.url;
    const body = req.body;
    let queryHeaders = req.headers;

    delete queryHeaders['host']
    delete queryHeaders['roblox-id']
    

    HttpService.PostAsync(urlQury, JSON.stringify(body), queryHeaders).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.send({'error': err})
    })


    console.log('POST', urlQury, body, queryHeaders)
});

module.exports = router