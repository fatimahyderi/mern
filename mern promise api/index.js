import express from 'express';
import  request  from 'request';
import https from 'https';

const app = express();
const port = 8080;

console.log(`server running on port ${port}`);

//var url = 'https://v6.exchangerate-api.com/v6/46fe7a2e267c86c3b3a7661d/latest/USD';
//var url = 'http://graph.facebook.com/517267866/?fields=picture';
// https.get(url, function(res){
//     var body = '';

//     res.on('data', function(chunk){
//         body += chunk;
//         //console.log(body);
//     });

//     res.on('end', function(){
//         var fbResponse = JSON.parse(body);
//         console.log("Got a response: ", fbResponse.conversion_rates.PKR);
//     });
// }).on('error', function(e){
//       console.log("Got an error: ", e);
// });
// const getcurRate = ()=> {
//    let currate = https.get(url, function(res){
//         var body = '';
            
//         res.on('data', function(chunk){
//             body += chunk;
//             //console.log(body);
//             });
            
//         res.on('end', function(){
//             var fbResponse = JSON.parse(body);
//             let pkrRate = fbResponse.conversion_rates.PKR;
//             console.log(`1 USD = ${pkrRate}`);
//             });
        
//         })
//         return new Promise((resolve,reject) => {
//             resolve(currate)
//         });
// }

// getcurRate().then((rate) => {
//     console.log(rate)
// })

    


// app.get('/',function(req,res){
        
//     //         const getCurrencyRate = () => {
//     //             let value = 100;
//     //         return new Promise((resolve,reject) => {
//     //             resolve(value)
//     //         })

//     // }
//     // getCurrencyRate().then((value) => {
//     //     console.log(value);
//     // })

//     res.end();
// })
const getCurrencyRate = () => {
    var options = {
        url: 'https://v6.exchangerate-api.com/v6/46fe7a2e267c86c3b3a7661d/latest/USD',
        headers: {
            'User-Agent': 'request'
        }
    };
    return new Promise(function(resolve, reject) {
    	// Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}

const totalRupees = () => {
    let value = 10;
    return new Promise((resolve,reject) => {
        resolve(value)
    });
}

var currencyrate;
var usdtopkr;
getCurrencyRate().then((result) => {
    currencyrate = result;
    usdtopkr = currencyrate.conversion_rates.PKR;
    console.log(`1 USD = ${usdtopkr} Rupees`);
    return totalRupees()
}).then((totalamount) => {
    console.log(`${totalamount} USD =  ${totalamount * usdtopkr} Rupees`)
})




app.listen(port);