const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

//conection mongodb
mongoose.connect('mongodb://localhost/sekolah_kita')
.then(db => console.log('You are Connected'))
.catch(err => console.log(err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

require('./router/router')(app)
const PORT = process.env.PORT || 8000

app.listen(PORT, () =>{
    console.log('Berhasil menjalankan server pada port 8000')
})