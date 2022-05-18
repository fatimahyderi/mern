import express from 'express';
import https from 'https';
import fetch from 'node-fetch';
import axios from 'axios';

import httpservice from 'httpservice';

const app = express();
const port = 8089;

console.log(`server running on ${port}`);

var currencyrate;
var usdtopkr;

app.get('/currency/:id',function(req,res){
    var currencyvalue = req.params['id'];
    const getCurrencyRate = () => {
    var  url = 'https://v6.exchangerate-api.com/v6/46fe7a2e267c86c3b3a7661d/latest/USD';


    /*return new Promise(function(resolve, reject) {
        // working of api with fetch in node-fetch //
        fetch(url).then(res => res.json())
        .then(json => {
            resolve(json)
        }).catch((error) => {
              reject(error);
          });
    })*/

    return new Promise(function(resolve,reject){
        // working of api with Http.axios //
        axios.get(url).then(function(response) {
            resolve(response.data);
        });
})

    /*return new Promise(function(resolve,reject){
        // working with Https //
        https.get(url).then(function(response) {
            console.log(response);
        })
    })*/

}

const totalRupees = () => {
    //let value = 10;
    return new Promise((resolve,reject) => {
        resolve(currencyvalue)
    });
}
async function resolveCurrencyApi(){
    console.log('working');
    const apiCurrencyValue = await getCurrencyRate();
    currencyrate = apiCurrencyValue;
    usdtopkr = currencyrate.conversion_rates.PKR;
    console.log(`1 USD = ${usdtopkr} Rupees`);
    const currencyvalue = await totalRupees();
    console.log(`${currencyvalue} USD =  ${currencyvalue * usdtopkr} Rupees`)
    //console.log(apiCurrencyValue);
   // console.log(totalAmount);

}

resolveCurrencyApi();
})
app.listen(port);