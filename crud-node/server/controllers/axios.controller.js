const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://favqs.com/api/',
    headers: { 'Authorization': 'Token token="5e47e7f450e2db6ff7d52a50067d6a47"' }
});

class axiosController {
    static getListQuotes(req, res) {
        instance('quotes')
            .then(({data}) => {
                res.status(200).json(data)
            })
    }

    static getActivity(req, res){
        instance('activities/')
        .then((data)=>
        {
            res.status(200).json(data)
        })
    }

    static getQuote(req, res){
        instance('qotd')
        .then(({data})=>{
            res.status(200).json(data)
        })
    }
}

module.exports = axiosController;