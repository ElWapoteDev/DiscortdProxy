const express = require('express');
const HttpService = require('../utils/HttpService')

const router = express.Router();

router.get('/ola', (req, res) => {
    res.send('Hola como tas tilin')
})

router.get('/http', (req, res) => {
    const urlQury = req.query.url;
    const queryHeaders = req.headers;
    const newHeaders = {
        'user-agent': queryHeaders['user-agent'],
        'accept': queryHeaders.accept,
        'accept-encoding': queryHeaders['accept-encoding'],
        'authorization': queryHeaders['authorization'],
        'content-type': queryHeaders['content-type'],
    }


    HttpService.GetAsync(urlQury, newHeaders).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.send({'error': err})
    })


    console.log(urlQury, newHeaders)
});

router.post('/http', (req, res) => {
    const urlQury = req.query.url;
    const body = req.body;
    const queryHeaders = req.headers;
    const newHeaders = {
        'user-agent': queryHeaders['user-agent'],
        'accept': queryHeaders.accept,
        'accept-encoding': queryHeaders['accept-encoding'],
        'authorization': queryHeaders['authorization'],
        'content-type': queryHeaders['content-type'],
    }
    

    HttpService.PostAsync(urlQury, JSON.stringify(body), newHeaders).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.send({'error': err})
    })


    console.log('POST', urlQury, body, newHeaders)
});

module.exports = router