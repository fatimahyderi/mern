import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const port = 8080;

const urlencoded = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

// const city = [
//     {title: 'Sindh', first: 'Karachi' , second: 'Hyderabad' },
//     {title: 'Punjab', first: 'Lahore' , second: 'Islamabad' },
// ]

// app.get('/', (req, res) => {
//     res.render('pages/home', {
//         city : city
//     })
// })

// app.get('/about',function(req,res){
//         res.send("hello world from about us");
//      })

const countries =[
    {
        code: 'Pak',
        capital: 'Islamabad',
        description: 'Pakistan is a parliamentary federal republic in South Asia, with a population of over 170 million people. Pakistan held successful elections in February 2008 and has a coalition government. Pakistan is a developing country with some tourist facilities in major cities but limited in outlying areas.'

    },

    {
        code: 'Aus',
        capital: 'Canberra',
        description: 'Australia, the smallest continent and one of the largest countries on Earth, lying between the Pacific and Indian oceans in the Southern Hemisphere.'

    },

    {
        code: 'Iran',
        capital: 'Tehran',
        description: 'Iran, a mountainous, arid, and ethnically diverse country of southwestern Asia. Much of Iran consists of a central desert plateau, which is ringed on all sides by lofty mountain ranges that afford access to the interior through high passes.'

    }
]

app.get('/country/:code', (req, res) => {
        //console.log(req.params['code'])
        var country_code = req.params['code'];
        var country_code = country_code.charAt(0).toUpperCase() +country_code.slice(1)
        console.log(country_code);
        const country_in_code = countries.find(country => country.code == country_code)
        //console.log(country_in_code);
          res.render('pages/country', {
              country : country_in_code
          })
     })

app.listen(port);