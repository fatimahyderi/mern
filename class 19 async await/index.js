import express from 'express';
//import https from 'https';
import fetch from 'node-fetch';

const app = express();
const port = 8080;

console.log(`server running on ${port}`);

var currencyrate;
var usdtopkr;

app.get('/currency/:id',function(req,res){
    var currencyvalue = req.params['id'];
const getCurrencyRate = () => {
    var  url = 'https://v6.exchangerate-api.com/v6/46fe7a2e267c86c3b3a7661d/latest/USD';


    return new Promise(function(resolve, reject) {
        console.log('testing');
    	// Do async job
        var data = fetch(url);
        console.log(data);
        resolve(data)
    })
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
    //const currencyvalue = await totalRupees();
    //console.log(`${currencyvalue} USD =  ${currencyvalue * usdtopkr} Rupees`)
    console.log(apiCurrencyValue);
   // console.log(totalAmount);

}

resolveCurrencyApi();
})
app.listen(port);