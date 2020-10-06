const router = require('express').Router();
const axiosController = require('../controllers/axios.controller');

router.get('/axios/getList', axiosController.getListQuotes);

router.get('/axios/activity', axiosController.getActivity);

router.get('/axios/quote', axiosController.getQuote);


module.exports=router;