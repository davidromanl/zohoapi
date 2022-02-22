const express = require('express')
const app = express()
const port = 3000

let token,datos

getToken = () => ({
})

getData = () => ({
axios.get()
})

app.get('/zohoapi', (req, res) => {
  getData()

res.json(datos)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

