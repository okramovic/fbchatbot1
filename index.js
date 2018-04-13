'use strict'

const app = require('express')(),
request = require('request'),
bodyParser = require('body-parser')

app.set('port', (process.env.port || 5000))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser, bodyParser.json())

app.get('/', (req,res)=>{
     res.send('chatbot here')
     res.end()
})

app.get('/webhook/',(req,res)=>{
     if (req.query['hub.verify_token']=== "genieclausetoken"){
          res.send(req.query['hub.challenge'])
     }
     res.send("Wrong token...")
})


app.listen(app.get('port'),() => console.log(`listening on ${app.get('port')}`) )