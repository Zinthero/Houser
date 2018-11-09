const express = require ('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const hc = require('../server/controller')

const HomeController=require('./controller')

require('dotenv').config

const app = express()

const port= process.env.SERVER_PORT || 4000;

app.use(bodyParser.json() )

app.post('/api/addListing',HomeController.postNewListing)
app.get('/api/fetchListings', HomeController.getAllListing)





app.listen(port,()=>console.log('ur mum is a server port', port))