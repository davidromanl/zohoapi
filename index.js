const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

let token,datos

getToken = () => {
  const url = 'https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.13dacb8ef678f3f3f1fe07d4a8dc2b30.b4f47af109e6be5915643f577d43c1b6&client_id=1000.8LI2BEFOUJBPRBR73KVRECD20K449P&client_secret=bcb4ac38c0f937c6531a0fa88b837bc110736fde70&grant_type=refresh_token'
  axios.post(url)
  .then(function({data}) {
    token = data.access_token
  })
  .catch(function(err) {
    console.error(err)
  })
}

getData = () => {
  url = 'https://creator.zoho.com/api/v2/voy.cel/Colombia/report/Productos_Ciclismo'
axios.get('/',{ headers: { Authorization: 'Bearer '+token}})
.then(function ({data}) {
datos = data 
})
.catch(function(err) {
  console.error(err)
  getToken()
})
}

app.get('/zohoapi', (req, res) => {
  getData();
res.json(datos)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

