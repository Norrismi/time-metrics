const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')

const PORT = 5000


const app = express()

const url = 'https://app.wonderland.money/#/dashboard'

//const url = 'https://www.theguardian.com/us'


axios(url)
    .then(res => {
        const html = res.data

console.log(html)
        const cardsArr = [];

        const $ = cheerio.load(html)
        $('.dashboard-card', html).each(function(){
            const card = $(this).text()
            // $(this).attr('href')

            cardsArr.push({
                card
            })

        })

        // console.log(cardsArr)
    
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))